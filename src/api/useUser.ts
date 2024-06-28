import useSWR, { type SWRResponse } from 'swr';
import type { AxiosResponse } from 'axios';
import { ENDPOINT } from '../const/endpoints.const';
import axiosInstance from './axios.ts';

type UserObject = {
  id: number;
  username: string;
};

type UseUserObjectDataResponse = {
  user: UserObject;
  isUserLoading: boolean;
  isUserError: boolean;
};

type GetUserByFetcher = {
  data: UserObject;
};

// adding SWR
// const fetcher = (...args: [string]) =>
//   fetch(...(args as unknown as [string])).then((res) => res.json());
const fetcher = async (url: string): Promise<AxiosResponse<any>> =>
  axiosInstance().get(url);
const useUser = (): UseUserObjectDataResponse => {
  const { data, error }: SWRResponse = useSWR<GetUserByFetcher>(
    ENDPOINT.currentUser,
    fetcher
  );

  return {
    user: data?.data?.username,
    isUserLoading: !data,
    isUserError: !!error,
  };
};

export { useUser };
