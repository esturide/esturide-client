import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Position } from '@const/Position';

const RouteContext = createContext(null);

export interface CreateTravelRequest {
  isDatePickerVisible: boolean;
  startTime: Date;
  finishedTime: Date;
  travelPrice: number;
  destinationEstablished: boolean;
  travelCanStart: boolean;
  validateTravel: boolean;
  destination: Position;
}

export default function RouteNavigatorContext({ children }: PropsWithChildren) {
  const [validTravel, setValidTravel] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/user/maps');
  const [travelRequestForm, setTravelRequestForm] =
    useState<CreateTravelRequest>({
      isDatePickerVisible: false,
      startTime: new Date(),
      finishedTime: new Date(),
      travelPrice: 1,
      destinationEstablished: false,
      travelCanStart: false,
      validateTravel: false,
      destination: {
        longitude: 0,
        latitude: 0,
      },
    });

  useEffect(() => {
    if (travelRequestForm.travelPrice >= 1) {
      setTravelCanStart(true);
    } else {
      setTravelCanStart(false);
    }
  }, [travelRequestForm.travelPrice]);

  useEffect(() => {
    setValidTravel(
      !(
        travelRequestForm.travelCanStart &&
        travelRequestForm.validateTravel &&
        travelRequestForm.destinationEstablished
      ),
    );
  }, [
    travelRequestForm.travelCanStart,
    travelRequestForm.validateTravel,
    travelRequestForm.destinationEstablished,
  ]);

  const setDatePickerVisibility = (value: boolean) => {
    setTravelRequestForm({
      ...travelRequestForm,
      ['isDatePickerVisible']: value,
    });
  };

  const setStartTime = (value: Date) => {
    setTravelRequestForm({
      ...travelRequestForm,
      ['startTime']: value,
    });
  };

  const setFinishedTime = (value: Date) => {
    setTravelRequestForm({
      ...travelRequestForm,
      ['finishedTime']: value,
    });
  };

  const setTravelPrice = (value: number) => {
    setTravelRequestForm({
      ...travelRequestForm,
      ['travelPrice']: value,
    });
  };

  const setDestinationEstablished = (value: boolean) => {
    setTravelRequestForm({
      ...travelRequestForm,
      ['destinationEstablished']: value,
    });
  };

  const setTravelCanStart = (value: boolean) => {
    setTravelRequestForm({
      ...travelRequestForm,
      ['travelCanStart']: value,
    });
  };

  const setValidateTravel = (value: boolean) => {
    setTravelRequestForm({
      ...travelRequestForm,
      ['validateTravel']: value,
    });
  };

  const setDestination = (value: Position) => {
    setTravelRequestForm({
      ...travelRequestForm,
      ['destination']: value,
    });
  };

  return (
    <RouteContext.Provider
      value={{
        travelRequestForm: travelRequestForm,
        currentRoute: currentRoute,

        validTravel: validTravel,

        setCurrentRoute: setCurrentRoute,
        setDatePickerVisibility: setDatePickerVisibility,
        setStartTime: setStartTime,
        setFinishedTime: setFinishedTime,
        setTravelPrice: setTravelPrice,
        setDestinationEstablished: setDestinationEstablished,
        setTravelCanStart: setTravelCanStart,
        setValidateTravel: setValidateTravel,
        setDestination: setDestination,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
}

export const useTravelScheduleRoute = () => {
  return useContext(RouteContext);
};
