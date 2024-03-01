/* eslint-disable default-param-last */
/* eslint-disable consistent-return */
import axios from 'axios';
import { localStorageKeys } from '../constants';

export function httpRequest(
  method,
  url,
  options = {},
  includeToken = false,
  config = {}
) {
  let promise;
  if (method === 'get' || method === 'delete') {
    promise = axios[method](url, {
      ...options, // config
      ...(includeToken && {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem(localStorageKeys?.authToken) ?? ''
          }`,
        },
      }),
    });
  }
  promise = axios[method](
    url,
    {
      ...options, // data
    },
    {
      ...(includeToken && {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem(localStorageKeys?.authToken) ?? ''
          }`,
        },
      }),
      ...config,
    }
  );
  return promise;
}
