import { AxiosResponse } from 'axios';
import useSWRMutation from 'swr/dist/mutation';
import { ENDPOINT } from '../../const/endpoints.const';
import axiosInstance from '../axios';

type AddAwardBody = {
  name: string;
  value: number;
};

type AddAwardDataResponse = {
  data?: AddAwardBody[];
  error: boolean;
  isLoading: boolean;
};

const fetcher = async (
  url: string,
  { arg }: { arg: AddAwardBody }
): Promise<AxiosResponse<AddAwardBody[]>> => axiosInstance().post(url, arg);

const useAddAward = (id: number) => {
  const postUserUrl = ENDPOINT.prizesId.replace('{:id}', id);
  const { trigger, isMutating,  error, } = useSWRMutation(postUserUrl, fetcher);

  return {
    trigger,
    isMutating: isMutating,
    error: !!error,
  };
};

export default useAddAward;
