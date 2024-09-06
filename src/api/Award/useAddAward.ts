import { AxiosResponse } from 'axios';
import useSWRMutation from 'swr/mutation';
import { prizesUrl } from '../../const/endpoints.const';
import axiosInstance from '../axios';

type AddAwardBody = {
  name: string;
  value: number;
};

const fetcher = async (
  url: string,
  { arg }: { arg: AddAwardBody }
): Promise<AxiosResponse<AddAwardBody[]>> => axiosInstance().post(url, arg);


const useAddAward = (id: string) => {
  const postAwardUrl = prizesUrl(id)
  const { trigger, isMutating,  error, } = useSWRMutation(postAwardUrl, fetcher);

  return {
    trigger,
    isMutating: isMutating,
    error: !!error,
  };
};

export default useAddAward;