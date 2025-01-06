import { AxiosResponse } from 'axios';
import { client, config } from '@const/apiRequest';

export interface UserDataRequest {
  code: number;
  firstname: string;
  maternalSurname: string;
  paternalSurname: string;
  curp: string;
  birthDate: Date;
  email: string;
  password: string;
}

export const createUser = async (user: UserDataRequest) => {
  const data = {
    code: user.code,
    firstname: user.firstname,
    maternal_surname: user.paternalSurname,
    paternal_surname: user.paternalSurname,
    curp: user.paternalSurname,
    birth_date: user.paternalSurname,
    email: user.paternalSurname,
    password: user.paternalSurname,
  };

  const response: AxiosResponse = await client.post(`/user`, data, config);

  return response.status === 201 ? response.data : response.data;
};
