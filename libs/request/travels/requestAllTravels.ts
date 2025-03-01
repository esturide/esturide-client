import { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';
import { PublicProfile, Travel } from '@const/Travels';

export const requestAllTravel = async (
  limit: number = 16,
): Promise<Travel[]> => {
  try {
    const response: AxiosResponse = await clientTravelMatchNetwork.get(
      `/schedule/search`,
      {
        params: {
          limit: limit,
        },
        ...config,
      },
    );

    const travels: Travel[] = [];

    for (const travel of response.data) {
      const driver = travel.driver;
      const origin = travel.origin;
      const destination = travel.destination;

      const passengers: PublicProfile[] = [];

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

      travels.push({
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
    }

    return travels;
  } catch (e) {
    console.error(e);
    showAxiosExceptionMessage(e);
  }

  return [];
};
