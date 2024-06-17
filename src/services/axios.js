import axios from "axios";

//create axios for server call and headers
const instance = axios.create({
  baseURL: "http://localhost:4005",
});

// Interceptor for GET
instance.interceptors.request.use(
  function (config) {
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

// Interceptor for POST
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

export const deleteUser = (parameters) => {
  return axios.delete(`http://localhost:4005/Employe/${parameters}`);
};

export const updateUser = (parameters) => {
  return axios.put(
    `http://localhost:4005/Employe/${parameters.id}`,
    parameters.data
  );
};
