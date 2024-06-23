import { ENDPOINT } from '../const/endpoints.const';
import useSWR from 'swr';
import axiosInstance from './axios';
import { AxiosResponse } from 'axios';

type AwardObject = {
  id: number;
  name: string;
  value: number;
  student: number;
};

type UseAwardsObjectDataResponse = {
  awards?: AwardObject[];
  isAwardsLoading: boolean;
  isAwardsError: boolean;
};

type GetPrizesByFetcher = {
  data: AwardObject[];
};

const fetcher = async (
  url: string,
): Promise<AxiosResponse<any>> =>
  axiosInstance().get(url);

const useAwards = (id: any): UseAwardsObjectDataResponse => {
  const { data, error } = useSWR<GetPrizesByFetcher>(ENDPOINT.prizesId.replace('{:id}', id), fetcher);

  return {
    awards: data?.data,
    isAwardsLoading: !error && (!data || !data.data),
    isAwardsError: !!error,
  };
};

export { useAwards };
