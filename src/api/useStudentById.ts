import { ENDPOINT } from "../const/endpoints.const";
import useSWR from "swr";

// adding SWR
const fetcher = (...args: any) => fetch(...args as [any]).then((res) => res.json());

const useStudentById = (id: any) => {
  const { data, error } = useSWR(ENDPOINT.studentId, fetcher);
  
  return {
    student: data?.data.filter((item: any) => item.pk === id)[0],
    isStudentLoading: !error && (!data || !data.data),
    isStudentError: error,
  };
};

export { useStudentById };
