import axios, { AxiosResponse } from 'axios';
import { clientUserManagementSystem, config } from '@const/apiRequest';
import { formatDate } from '@libs/format/dates';

export interface UserDataRequest {
  code?: number;
  firstname?: string;
  maternalSurname?: string;
  paternalSurname?: string;
  curp?: string;
  birthDate?: Date;
  email?: string;
  password?: string;
}

export const createUser = async (user: UserDataRequest) => {
  try {
    const response: AxiosResponse = await clientUserManagementSystem.post(
      `/user/`,
      {
        code: user.code,
        firstname: user.firstname,
        maternal_surname: user.paternalSurname,
        paternal_surname: user.paternalSurname,
        curp: user.curp,
        birth_date: formatDate(user.birthDate),
        email: user.email,
        password: user.password,
      },
      config,
    );

    return response.status === 200;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return false;
    }

    throw e;
  }
};
