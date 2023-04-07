import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
import loadEnvVar from "../utils/envLoader";

const baseUrl = loadEnvVar("BASE_API_URL");


export const login = async (user, dispatch) => {
  console.log("baseURL is: ", baseUrl)
  dispatch(loginStart());
  const loginUrl = baseUrl + "/auth/login"
  console.log("loginCalled url is: ", loginUrl, " userDataIs: ", user)

  try {
    const res = await axios.post(loginUrl, user);
    console.log("login called axiosSuccess res is:", res)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("login called axios error:", err.response.data)

    dispatch(loginFailure());
  }
};


export const register = async (userData, dispatch, navToLogin) => {

  
  const registerUrl = baseUrl + "/auth/register"
  console.log("registerCalled url is: ", registerUrl, " userDataIs: ", userData)
  
  try {
    console.log("handleFinish uname is: ", userData.username, " pass is ", userData.password, " url is: ", registerUrl)
    const res = await axios.post(registerUrl, userData);
    // history.push("/login");
    navToLogin()

  } catch (err) {
    console.log("err register: ", err)
  }
}