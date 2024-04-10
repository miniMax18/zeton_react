import { ENDPOINT } from "../const/endpoints.const";
import useSWR, {SWRResponse, useSWRConfig} from "swr";
import useSWRMutation from 'swr/mutation'
import axios, {AxiosInstance} from "axios"
import {Fetcher, Key} from "swr/dist/types";

type UserRequestBody = {
  username: string,
  password: string
}

export type UserResponse = {
  token: string
};

export const axiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      "content-type": "application/json; charset=utf-8",
      "accept": "application/json"
    }
  })
}

// adding SWR
// const fetcher = (...args: [string]) => fetch(...args as unknown as [string]).then((res) => res.json());
const fetcher = async (user: UserRequestBody) => await axiosInstance().post("token-auth/", user)

// const useUser = (): UserResponse =>  useSWR<UserResponse>(ENDPOINT.currentUser, fetcher)
const useUser = () =>  useSWRMutation<UserResponse>(ENDPOINT.currentUser, fetcher)

    // <Data = any, Error = any, SWRKey extends Key = null>(key: SWRKey, fetcher: Fetcher<Data, SWRKey> | null): SWRResponse<Data, Error>;



export { useUser };
