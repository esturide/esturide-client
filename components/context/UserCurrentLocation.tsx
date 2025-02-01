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
import loaderEffect from '@libs/loaderEffect';

const CurrentUserPosition = createContext(null);

export default function UserCurrentLocation({ children }: PropsWithChildren) {
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<Position>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const updateLocation = async () => {
      loaderEffect(async () => {
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
      }, setLoading);
    };

    updateLocation();
  }, [update]);

  return (
    <CurrentUserPosition.Provider
      value={{ setRefresh: setUpdate, location: location, isLoading: loading }}
    >
      {children}
    </CurrentUserPosition.Provider>
  );
}

export const useUserPosition = () => {
  return useContext(CurrentUserPosition);
};
