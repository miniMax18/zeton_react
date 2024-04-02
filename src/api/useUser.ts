import { ENDPOINT } from "../const/endpoints.const";
import useSWR, { SWRResponse } from "swr";

// adding SWR
const fetcher = (...args: [string]) => fetch(...args as unknown as [string]).then((res) => res.json());

const useUser = () => {
  const { data, error }: SWRResponse = useSWR(ENDPOINT.currentUser, fetcher);

  return {
    user: data?.user,
    isLoading: !error && (!data || !data.user),
    isError: error,
  };
};

export { useUser };
