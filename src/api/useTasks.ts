import { ENDPOINT } from "../const/endpoints.const";
import useSWR from "swr";

type TaskObject = {
  id: number;
  name: string;
  value: number;
  student: number;
};

type UseTasksObjectDataResponse = {
  tasks?: TaskObject[],
  isTasksLoading: boolean,
  isTasksError: boolean,
};

type GetTasksByFetcher = {
  tasks: TaskObject[]
};

const fetcher = (...args: any) => fetch(...args as [any]).then((res) => res.json());

const useTasks = (id: any): UseTasksObjectDataResponse => {
  const URL = ENDPOINT.tasksId.replace("{:id}", id);
  // TODO type of error
  const { data, error } = useSWR<GetTasksByFetcher>(URL, fetcher);

  console.log(data)

  return {
    tasks: data?.tasks,
    isTasksLoading: !error && (!data || !data.tasks),
    isTasksError: error,
  };
};

export { useTasks };