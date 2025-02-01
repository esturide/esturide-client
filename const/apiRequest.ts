import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

const baseURL = 'https://api.esturide.com';

export const clientRoot = axios.create({
  baseURL: baseURL,
});

export const clientUserManagement = axios.create({
  baseURL: `${baseURL}/user_management`,
});

export const clientTravelMatchNetwork = axios.create({
  baseURL: `${baseURL}/travel_match_network`,
});

export const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
};
