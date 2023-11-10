import axios from "axios";
const URL = "http://localhost:8000";

export const authSignup = async (user) => {
  try {
    let resp = await axios.post(`${URL}/signup`, user);
    if (resp.status === 200) return resp.data;
    else {
      console.log("something is wrong ", resp.statusText);
    }
    return resp;
  } catch (error) {
    console.log("something went wrong ", error.message);
    return null;
  }
};

export const authLogin = async (login) => {
  try {
    let resp = await axios.post(`${URL}/login`, login);
    if (resp.status === 200) {
      return resp.data;
    } else {
      console.log(resp.status);
    }
  } catch (error) {
    console.log("something went wrong ", error.status);
  }
};
