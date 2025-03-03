import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Position } from '@const/Position';
import { requestCurrentScheduleTravel } from '@libs/request/travels/requestCurrentTravel';
import {PublicProfile, Travel} from '@const/Travels';

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

const EmptyUserData: PublicProfile = {
  userCode: 0,
  firstName: '',
  maternalSurname: '',
  paternalSurname: '',
  position: {
    latitude: 0,
    longitude: 0,
  },
};

const EmptyTravelData: Travel = {
  uuid: '',
  driver: EmptyUserData,
  price: 0,
  active: false,
  terminate: false,
  cancel: false,
  maxPassenger: 0,
  seats: [],
  passengers: [],
  origin: {
    latitude: 0,
    longitude: 0,
  },
  destination: {
    latitude: 0,
    longitude: 0,
  },
  starting: new Date(),
  finished: new Date(),
};

export default function DriverContextProvider({ children }: PropsWithChildren) {
  const [travelData, setTravelData] = useState<Travel>(EmptyTravelData);
  const [travelDataIsLoad, setTravelDataIsLoad] = useState(false);
  const [validTravel, setValidTravel] = useState(false);
  const [travelRequestForm, setTravelRequestForm] =
    useState<CreateTravelRequest>(EmptyTravel);

  useEffect(() => {
    let status = false;

    const loadTravel = async () => {
      status = await requestCurrentScheduleTravel((travel: Travel) => {
        setTravelData(travel);
      });

      setTravelDataIsLoad(status);
    };

    loadTravel();
  }, []);

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

        validTravel: validTravel,

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

        travelData: travelData,
        travelDataIsLoad: travelDataIsLoad,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
}

export const useDriverContext = () => {
  return useContext(RouteContext);
};
