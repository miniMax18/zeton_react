import { ENDPOINT } from "../const/endpoints.const";
import useSWR from "swr";

// adding SWR
const fetcher = (...args: any) => fetch(...args as [any]).then((res) => res.json());

const useStudents = () => {
  const { data, error } = useSWR(ENDPOINT.studentsList, fetcher);

  return {
    students: data?.data,
    isStudentsLoading: !error && (!data || !data.data),
    isStudentsError: error,
  };
};

export { useStudents };
