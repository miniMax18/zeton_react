import useSWR from 'swr';
import { ENDPOINT } from '../const/endpoints.const';

type StudentByIdObject = {
  pk: number;
  first_name: string;
  total_points: number;
};

type UseStudentByIdObjectDataResponse = {
  student?: StudentByIdObject;
  isStudentLoading: boolean;
  isStudentError: boolean;
};

type GetStudentsByFetcher = {
  data: StudentByIdObject[];
};

// adding SWR
const fetcher = (...args: any) =>
  fetch(...(args as [any])).then((res) => res.json());

const useStudentById = (id: any): UseStudentByIdObjectDataResponse => {
  const { data, error } = useSWR<GetStudentsByFetcher>(
    ENDPOINT.studentId,
    fetcher
  );

  return {
    student: data?.data.filter((item) => item.pk === id)[0],
    isStudentLoading: !error && (!data || !data.data),
    isStudentError: error,
  };
};

export { useStudentById };
