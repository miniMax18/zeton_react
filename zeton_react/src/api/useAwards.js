import { ENDPOINT } from "../const/endpoints.const";
//import { resolve } from 'path'
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());


const useAwards = (id) => {
  //const dirnameEndpoint = resolve(__dirname, "")
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