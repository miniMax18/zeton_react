import { ENDPOINT } from "../const/endpoints.const";
import useSWR from "swr";
import type {AxiosResponse} from "axios";
import axiosInstance from "./axios.ts";

type StudentObject = {
  pk: number;
  first_name?: string;
  total_points?: number;
};

type UseStudentObjectDataResponse = {
  students?: StudentObject[];
  isStudentsLoading: boolean;
  isStudentsError: boolean;
};

type GetStudentsByFetcher = {
  data: StudentObject[];
};

// adding SWR
// const fetcher = (...args: any) => fetch(...args as [any]).then((res) => res.json());
const fetcher = async (
  url: string,
): Promise<AxiosResponse<any>> =>
  axiosInstance().get(url);
const useStudents = (): UseStudentObjectDataResponse => {
  const { data, error } = useSWR<GetStudentsByFetcher>(ENDPOINT.studentsList, fetcher);

  return {
    students: data?.data,
    isStudentsLoading: !error && (!data || !data.data),
    isStudentsError: !!error,
  };
};

export { useStudents };
