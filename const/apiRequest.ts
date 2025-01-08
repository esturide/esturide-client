import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

export const clientRoot = axios.create({
  baseURL: 'https://api.esturide.com',
});

export const clientUserManagementSystem = axios.create({
  baseURL: 'https://api.esturide.com/user_management_system',
});

export const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
};
