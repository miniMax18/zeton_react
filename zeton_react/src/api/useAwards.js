import { ENDPOINT } from "../const/endpoints.const";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useAwards = (id) => {
  const URL = ENDPOINT.prizesId.replace("{:id}", id)
  const { data, error } = useSWR(URL, fetcher);

  console.log(data)

  return {
    awards: data?.prizes,
    isAwardsLoading: !error && (!data || !data.prizes),
    isAwardsError: error,
  };
};

export { useAwards };