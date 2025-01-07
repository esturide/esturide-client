import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

export const defaultBaseURL = 'https://api.esturide.com/';

export const clientRoot = axios.create({
  baseURL: defaultBaseURL,
});

export const clientUserManagementSystem = axios.create({
  baseURL: defaultBaseURL + '/user_management_system',
});

export const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
};
