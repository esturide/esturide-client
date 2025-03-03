import { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';

export interface TrackingRequest {
  uuid: string;
  record: {
    latitude: number;
    longitude: number;
  };
}

export const updateTracking = async (tracking: TrackingRequest) => {
  try {
    const data = {
      origin: {
        location: tracking.record.longitude,
        latitude: tracking.record.latitude,
        longitude: 0,
      },
      UUID: tracking.uuid,
    };

    const response: AxiosResponse = await clientTravelMatchNetwork.post(
      '/ride/tracking/',
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
