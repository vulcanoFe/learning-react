import { AxiosResponse } from "axios";

export const checkSuccessfulResponse = (response:AxiosResponse):boolean => {
  return response?.status===200;
}