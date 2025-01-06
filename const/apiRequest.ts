import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

export const defaultBaseURL = 'https://api.esturide.com/';

export const client = axios.create({
  baseURL: defaultBaseURL,
});

export const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
};
