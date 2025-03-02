import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Position } from '@const/Position';

const RouteContext = createContext<null | any>(null);

export interface CreateTravelRequest {
  isDatePickerVisible: boolean;
  startTime: Date;
  finishedTime: Date;
  travelPrice: number;
  destinationEstablished: boolean;
  validPrice: boolean;
  validateTravel: boolean;
  destination: Position;
  seats: string[];
}

const EmptyTravel = {
  isDatePickerVisible: false,
  startTime: new Date(),
  finishedTime: new Date(),
  travelPrice: 1,
  destinationEstablished: false,
  validPrice: true,
  validateTravel: false,
  destination: {
    longitude: 0,
    latitude: 0,
  },
  seats: [],
};

export default function RouteNavigatorContext({ children }: PropsWithChildren) {
  const [validTravel, setValidTravel] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/user/maps');
  const [travelRequestForm, setTravelRequestForm] =
    useState<CreateTravelRequest>(EmptyTravel);

  useEffect(() => {
    setValidPrice(travelRequestForm.travelPrice >= 1);
  }, [travelRequestForm.travelPrice]);

  useEffect(() => {
    setValidTravel(
      !(
        travelRequestForm.validPrice &&
        travelRequestForm.validateTravel &&
        travelRequestForm.destinationEstablished
      ),
    );
  }, [
    travelRequestForm.validPrice,
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

  const setValidPrice = (value: boolean) => {
    setTravelRequestForm({
      ...travelRequestForm,
      ['validPrice']: value,
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

  const addSeats = (value: string) => {
    if (!travelRequestForm['seats'].includes(value)) {
      travelRequestForm['seats'].push(value);
    }

    setTravelRequestForm({
      ...travelRequestForm,
      ['seats']: [...travelRequestForm['seats']],
    });
  };

  const removeSeats = (value: string) => {
    setTravelRequestForm({
      ...travelRequestForm,
      ['seats']: travelRequestForm['seats'].filter((item) => item !== value),
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
        setValidPrice: setValidPrice,
        setValidateTravel: setValidateTravel,
        setDestination: setDestination,
        addSeats: addSeats,
        removeSeats: removeSeats,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
}

export const useTravelScheduleRoute = () => {
  return useContext(RouteContext);
};
