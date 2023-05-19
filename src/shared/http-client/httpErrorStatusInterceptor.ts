import { AxiosInstance } from "axios";

const httpErrorStatusInterceptor = (axiosInstance:AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    null,
    (error) => {
      const status = error?.response?.status;
      // non esiste sessione oppure è scaduta
      if (status === 401) {
        console.log("Unauthorized, redirect to login");
      }
      // aggiungere altri if oppure rimandare gestione in componente chiamante
    }
  );
}

export default httpErrorStatusInterceptor;