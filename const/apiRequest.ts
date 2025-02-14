import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

const baseURL = 'https://api.esturide.com';

export const clientRoot = axios.create({
  baseURL: baseURL,
});

export const clientUserManagement = axios.create({
  baseURL: `${baseURL}/v1/user-management`,
});

export const clientTravelMatchNetwork = axios.create({
  baseURL: `${baseURL}/v1/travel-match_network`,
});

export const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
};
