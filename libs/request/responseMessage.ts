import axios from 'axios';
import { showMessage } from '@libs/alerts/toast';

export const responseMessage = (e) => {
  if (axios.isAxiosError(e)) {
    showMessage(e.response.data.message);
  }
};
