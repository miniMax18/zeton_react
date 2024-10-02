import useSWR from 'swr';
import { AxiosResponse } from 'axios';
import { Award } from '../../../src/views/Award/types';
import { ENDPOINT } from '../../const/endpoints.const';
import axiosInstance from '.././axios';

type UseAwardsObjectDataResponse = {
  awards?: Award[];
  isAwardsLoading: boolean;
  isAwardsError: boolean;
};

type GetPrizesByFetcher = {
  data: Award[];
};

const fetcher = async (url: string): Promise<AxiosResponse<any>> =>
  axiosInstance().get(url);

const useAwards = (id: any): UseAwardsObjectDataResponse => {
  const { data, error } = useSWR<GetPrizesByFetcher>(
    ENDPOINT.prizesId.replace('{:id}', id),
    fetcher
  );

  return {
    awards: data?.data,
    isAwardsLoading: !error && (!data || !data.data),
    isAwardsError: !!error,
  };
};

export { useAwards };