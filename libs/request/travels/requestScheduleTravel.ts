import { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { Position } from '@const/Position';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';

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
      maxPassengers: seats,
    };

    console.log(data);

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
