import axios, { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { showMessage } from '@libs/alerts/toast';

type StatusMode = 'start' | 'finished' | 'cancel';

export const changeStatusTravel = async (mode: StatusMode, uuid: string) => {
  try {
    const response: AxiosResponse = await clientTravelMatchNetwork.patch(
      `/schedule/${mode}/${uuid}`,
      {},
      config,
    );

    return response.status === 200 || response.status === 201;
  } catch (e) {
    console.error(e);

    if (axios.isAxiosError(e)) {
      showMessage(e.response.data.message);

      return false;
    }
  }

  return false;
};
