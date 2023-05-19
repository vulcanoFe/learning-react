import axios from "axios";
import authHeaderInterceptor from "./authHeaderInterceptor";
import httpErrorStatusInterceptor from "./httpErrorStatusInterceptor";

const httpClient = axios.create({})

authHeaderInterceptor(httpClient);
httpErrorStatusInterceptor(httpClient);

export default httpClient;