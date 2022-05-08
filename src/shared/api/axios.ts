import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query';

export const httpClient = axios.create();

export const httpClient2 =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await httpClient({ url: baseUrl + url, method, data });
      return result.data;
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      console.log(err);

      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
