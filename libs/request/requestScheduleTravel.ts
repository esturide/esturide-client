import axios, { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { Position } from '@const/Position';

export const requestScheduleTravel = async (
  start: Position,
  end: Position,
  price: number,
  seats: number,
) => {
  try {
    const data = {
      start: {
        location: 0,
        latitude: start.latitude,
        longitude: start.longitude,
      },
      end: {
        location: 0,
        latitude: end.latitude,
        longitude: start.longitude,
      },
      price: price,
      max_passengers: seats,
    };

    const response: AxiosResponse = await clientTravelMatchNetwork.post(
      `/schedule/`,
      data,
      config,
    );

    return response.status === 200 || response.status === 201;
  } catch (e) {
    console.error(e);

    if (axios.isAxiosError(e)) {
      return false;
    }
  }

  return false;
};
