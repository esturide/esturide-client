import { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { Position } from '@const/Position';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';

export const requestScheduleTravel = async (
  start: Position,
  end: Position,
  price: number,
  maxPassengers: number,
  starting: Date,
  finished: Date,
  seats = [],
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
      maxPassengers: maxPassengers,
      price: price,
      starting: starting.toISOString(),
      finished: finished.toISOString(),
      seats: seats,
    };

    const response: AxiosResponse = await clientTravelMatchNetwork.post(
      `/schedule/`,
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
