import { QueryClient } from '@tanstack/react-query';
import { envConfig } from '@core/config';
import { httpRequest } from './axios';

export const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await httpRequest(
    queryKey[1] ? queryKey[1] : 'post',
    `${queryKey[3] ? queryKey[3] : envConfig.api_url}${queryKey[0]}`,
    queryKey[2] ? queryKey[2] : {},
    true
  );
  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});
