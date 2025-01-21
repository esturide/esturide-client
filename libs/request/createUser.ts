import axios, { AxiosResponse } from 'axios';
import { clientUserManagementSystem, config } from '@const/apiRequest';
import { formatDate } from '@libs/format/dates';

export const createUser = async (
  code: number,
  firstName: string,
  maternalSurname: string,
  paternalSurname: string,
  curp: string,
  birth: Date,
  email: string,
  password: string,
) => {
  try {
    const data = {
      code: code,
      firstname: firstName,
      maternal_surname: maternalSurname,
      paternal_surname: paternalSurname,
      curp: curp,
      birth_date: formatDate(birth),
      email: email,
      password: password,
    };

    const response: AxiosResponse = await clientUserManagementSystem.post(
      `/user/`,
      data,
      config,
    );

    return response.status === 200 || response.status === 201;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return false;
    }

    return false;
  }
};
