import { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';

type Callback = ((uuid: string) => void) | ((uuid: string) => Promise<void>);

export const requestCurrentRide = async (setRide: Callback) => {
  try {
    const response: AxiosResponse = await clientTravelMatchNetwork.get(
      '/ride/',
      config,
    );

    const status = response.status === 200 || response.status === 201;
    const dataResponse = response.data;

    if (status) {
      const uuid = dataResponse.data.uuid;
      const isAsync = setRide.constructor.name === 'AsyncFunction';

      if (isAsync) {
        await setRide(uuid);
      } else {
        setRide(uuid);
      }
    }

    return status;
  } catch (e) {
		return false;
  }
};
