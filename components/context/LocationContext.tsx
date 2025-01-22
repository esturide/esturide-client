import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as Location from 'expo-location';
import { Position } from '@const/Position';
import { showFailureMessage } from '@libs/toast/messages';
import { LocationObject } from 'expo-location';

export const CurrentPosition = createContext<Position>(null);

export default function LocationContext({ children }: PropsWithChildren) {
  const [location, setLocation] = useState<Position | null>(null);

  useEffect(() => {
    const updateLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        showFailureMessage('No se pudo acceder a la ubicacion.');
      }

      const locationObject = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: locationObject.coords.latitude,
        longitude: locationObject.coords.longitude,
      });

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 50,
          distanceInterval: 1,
        },
        (newLocation: LocationObject) => {
          console.log(newLocation);
          console.log(location);

          setLocation({
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
          });
        },
      );
    };

    updateLocation();
  }, []);

  return (
    <CurrentPosition.Provider value={location}>
      {children}
    </CurrentPosition.Provider>
  );
}

export const useCurrentPosition = () => {
  return useContext(CurrentPosition);
};
