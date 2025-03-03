import axios from 'axios';
import { showMessage } from '@libs/toast/alerts/toast';

export const showAxiosExceptionMessage = (e) => {
  if (axios.isAxiosError(e)) {
    showMessage(e.response.data.message);
  }
};
