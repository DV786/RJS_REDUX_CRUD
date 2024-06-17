import instance from "./axios";
import axios from "axios";
import { deleteUser, updateUser } from "./axios";

// Creating data using API
export async function getUsers() {
  // Parameters may look like below
  // parameters = 10
  try {
    const response = await instance.get("/Employe");
    return response;
  } catch (error) {
    return error.response;
  }
  // return axios.post(`/users/add`);
}

export async function addUsers(parameters) {
  try {
    const response = await instance.post("/Employe", parameters);
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function getIDUsers(parameters) {
  // Parameters may look like below
  // parameters = 10
  try {
    const response = await instance.get(`/Employe/${parameters}`);
    return response;
  } catch (error) {
    return error.response;
  }
  // return axios.post(`/users/add`);
}
// Updating data using API
export async function updateUserData(parameters) {
  // Parameters may look like below
  // const parameters = {
  //  password      : 'newPassword'
  // }
  try {
    const response = await updateUser(parameters);
    return response;
  } catch (error) {
    return false;
  }
  // return axios.put("/userdata/update", parameters);
}

// Updating data using API
export async function deleteUserData(parameters) {
  // Parameters may look like below
  // const parameters = {
  //  userId      : 2,
  // }
  try {
    const response = await deleteUser(parameters);
    return response;
  } catch (error) {
    return false;
  }
  // return axios.delete("/userdata/delete", parameters);`/Employe/${parameters}`
}
