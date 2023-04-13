import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("api/auth/login", user);
    console.log("loginSuccess: ", res.data)
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("loginFailure err: ", err)
    dispatch(loginFailure());
  }
};
