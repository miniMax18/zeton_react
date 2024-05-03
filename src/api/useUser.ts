import useSWR, { type SWRResponse } from 'swr';
import { ENDPOINT } from '../const/endpoints.const';

type UserObject = {
  user: string;
};

type UseUserObjectDataResponse = {
  user: UserObject;
  isUserLoading: boolean;
  isUserError: boolean;
};

type GetUserByFetcher = {
  user: UserObject;
};

// adding SWR
const fetcher = (...args: [string]) =>
  fetch(...(args as unknown as [string])).then((res) => res.json());

const useUser = (): UseUserObjectDataResponse => {
  const { data, error }: SWRResponse = useSWR<GetUserByFetcher>(
    ENDPOINT.currentUser,
    fetcher
  );

  return {
    user: data?.user,
    isUserLoading: !error && (!data || !data.users),
    isUserError: error,
  };
};

export { useUser };
