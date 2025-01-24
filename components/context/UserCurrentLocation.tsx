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

const CurrentUserPosition = createContext(null);

export default function UserCurrentLocation({ children }: PropsWithChildren) {
  const [update, setUpdate] = useState(false);
  const [location, setLocation] = useState<Position | null>(null);

  useEffect(() => {
    const updateLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        showFailureMessage('No se pudo acceder a la ubicacion.');
      }

      const locationObject = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: locationObject.coords.latitude,
        longitude: locationObject.coords.longitude,
      });

      setUpdate(false);
    };

    updateLocation();
  }, [update]);

  return (
    <CurrentUserPosition.Provider
      value={{ setRefresh: setUpdate, location: location }}
    >
      {children}
    </CurrentUserPosition.Provider>
  );
}

export const useUserPosition = () => {
  return useContext(CurrentUserPosition);
};
