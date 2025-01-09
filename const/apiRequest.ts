import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

const baseURL = 'https://api.esturide.com';

export const clientRoot = axios.create({
  baseURL: baseURL,
});

export const clientUserManagementSystem = axios.create({
  baseURL: `${baseURL}/user_management_system`,
});

export const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
};
