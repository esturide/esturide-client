import { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';
import { Ride } from '@const/Travels';

export const requestRide = async (ride: Ride) => {
  try {
    const data = {
      origin: {
        location: ride.origin.longitude,
        latitude: ride.origin.latitude,
        longitude: 0,
      },
      UUID: ride.uuid,
    };

    const response: AxiosResponse = await clientTravelMatchNetwork.post(
      '/ride/',
      data,
      config,
    );

    return response.status === 200 || response.status === 201;
  } catch (e) {
    console.error(e);

    showAxiosExceptionMessage(e);
  }

  return false;
};
