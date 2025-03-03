import axios, { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';
import { PublicProfile, Travel } from '@const/Travels';

export const requestCurrentScheduleTravel = async (
  setTravel: (travel: Travel) => void,
) => {
  try {
    const response: AxiosResponse = await clientTravelMatchNetwork.get(
      `/schedule/current`,
      config,
    );

    const travel = response.data;
    const driver = travel.driver;
    const origin = travel.origin;
    const destination = travel.destination;

    const passengers: PublicProfile[] = [];

    const status = response.status === 200 || response.status === 201;

    if (!status) {
      return false;
    }

    for (const passenger of travel.passengers) {
      passengers.push({
        userCode: passenger.userCode,
        firstName: passenger.firstname,
        maternalSurname: passenger.maternalSurname,
        paternalSurname: passenger.paternalSurname,
        position: {
          latitude: passenger.position.latitude,
          longitude: passenger.position.longitude,
        },
      });
    }

    setTravel({
      uuid: travel.uuid,
      driver: {
        userCode: driver.userCode,
        firstName: driver.firstname,
        maternalSurname: driver.maternalSurname,
        paternalSurname: driver.paternalSurname,
        position: {
          latitude: driver.position.latitude,
          longitude: driver.position.longitude,
        },
      },
      price: travel.price,
      active: travel.active,
      terminate: travel.terminate,
      cancel: travel.cancel,
      maxPassenger: travel.maxPassengers,
      passengers: [...passengers],
      origin: {
        latitude: origin.latitude,
        longitude: origin.longitude,
      },
      destination: {
        latitude: destination.latitude,
        longitude: destination.latitude,
      },
      finished: new Date(travel.finished),
      starting: new Date(travel.starting),
      seats: travel.seats,
    });

    return status;
  } catch (e) {
    console.error(e);

    showAxiosExceptionMessage(e);
  }

  return false;
};

export const requestCurrentUUIDScheduleTravel = async () => {
  try {
    const response: AxiosResponse = await clientTravelMatchNetwork.get(
      `/schedule/current`,
      config,
    );

    return response.data['uuid'];
  } catch (e) {
    console.error(e);

    showAxiosExceptionMessage(e);
  }

  return '';
};

export const requestIsCurrentScheduleTravel = async () => {
  try {
    const response: AxiosResponse = await clientTravelMatchNetwork.get(
      `/schedule/current`,
      config,
    );

    return response.status === 200 || response.status === 201;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return false;
    }

    console.error(e);
  }

  return false;
};
