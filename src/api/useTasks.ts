import { ENDPOINT } from '../const/endpoints.const';
import useSWR from 'swr';
import axiosInstance from './axios';
import { AxiosResponse } from 'axios';

type TaskObject = {
  id: number;
  name: string;
  value: number;
  student: number;
};

type UseTasksObjectDataResponse = {
  tasks?: TaskObject[];
  isTasksLoading: boolean;
  isTasksError: boolean;
};

type GetTasksByFetcher = {
  data: TaskObject[];
};

const fetcher = async (
  url: string,
): Promise<AxiosResponse<any>> =>
  axiosInstance().get(url);

const useTasks = (id: any): UseTasksObjectDataResponse => {
  const { data, error } = useSWR<GetTasksByFetcher>(ENDPOINT.tasksList.replace('{:id}', id), fetcher);
  console.log(data)
  return {
    tasks: data?.data,
    isTasksLoading: !error && (!data || !data.data),
    isTasksError: !!error,
  };
};

export { useTasks };
