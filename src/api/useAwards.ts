import { ENDPOINT } from '../const/endpoints.const';
import useSWR from 'swr';

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
  prizes: AwardObject[];
};

const fetcher = (...args: any[]) =>
  fetch(...(args as [any])).then((res) => res.json());

const useAwards = (id: any): UseAwardsObjectDataResponse => {
  const URL = process.env.VITE_REACT_APP_API_URL + ENDPOINT.prizesId.replace("{:id}", id)
  const { data, error } = useSWR<GetPrizesByFetcher>(URL, fetcher);

  return {
    awards: data?.prizes,
    isAwardsLoading: !error && (!data || !data.prizes),
    isAwardsError: !!error,
  };
};

export { useAwards };
