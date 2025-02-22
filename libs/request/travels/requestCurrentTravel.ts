import { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';

export const requestCurrentScheduleTravel = async () => {
  try {
    const response: AxiosResponse = await clientTravelMatchNetwork.get(
      `/schedule/current`,
      config,
    );

    return response.data;
  } catch (e) {
    console.error(e);

    showAxiosExceptionMessage(e);
  }

  return {};
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
