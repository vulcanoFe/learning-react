import { AxiosInstance } from "axios";

const authHeaderInterceptor = (axiosInstance:AxiosInstance) => {
  axiosInstance.interceptors.request.use(request => {
    const token = "TOKEN SESSIONE";
    request.headers['X-XSRF-TOKEN'] = token;
    request.headers['Cache-Control'] = 'max-age=0, no-cache, no-store, must-revalidate';
    request.headers['Pragma'] = 'no-cache';
    request.headers['Expires'] = '0';
    request.headers['If-Modified-Since'] = '0';
    return request;
  });
}

export default authHeaderInterceptor;