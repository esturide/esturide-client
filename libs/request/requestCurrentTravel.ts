import axios, { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';

export const requestCurrentScheduleTravel = async () => {
  try {
    const response: AxiosResponse = await clientTravelMatchNetwork.get(
      `/schedule/current`,
      config,
    );

    return response.data;
  } catch (e) {
    console.error(e);

    if (axios.isAxiosError(e)) {
      return {};
    }
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

    if (axios.isAxiosError(e)) {
      return '';
    }
  }

  return '';
};
