import axios, { AxiosResponse } from 'axios';
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
