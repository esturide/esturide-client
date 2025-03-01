import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Travel } from '@const/Travels';

interface TravelData {
  current: Travel;
}

interface ContextProps {
  setTravelData: (name: string, value) => void;
  data?: TravelData;
}

const PassengerContext = createContext<ContextProps>({
  setTravelData: (name: string, value) => {
    return;
  },
});

export default function PassengerContextProvider({
  children,
}: PropsWithChildren) {
  const [travelForm, setTravelForm] = useState<TravelData>({});

  const handleChange = (name: string, value) => {
    setTravelForm({ ...travelForm, [name]: value });
  };

  useEffect(() => {
    console.log(`Travel request: ${JSON.stringify(travelForm)}`);
  }, [travelForm]);

  return (
    <PassengerContext.Provider
      value={{ setTravelData: handleChange, data: travelForm }}
    >
      {children}
    </PassengerContext.Provider>
  );
}

export const usePassengerContext = () => {
  return useContext(PassengerContext);
};
