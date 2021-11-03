import axios from "axios";
import { AUTH_LOGOUT, AUTH_SUCCESS } from "./actionTypes";

export function auth(email, password, isLogin) {
  return async (dispatch) => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCZQKtLW2Xv2VNvTSL58QD3S6YHMX7SK5I";

    if (isLogin) {
      url = url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCZQKtLW2Xv2VNvTSL58QD3S6YHMX7SK5I";
    }

    const response = await axios.post(url, authData);
    const data = response.data;

    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("expirationDate", expirationDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  };
}

export function autoLogin() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
}

export function autoLogout(time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: AUTH_LOGOUT,
  };
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token,
  };
}

// loginHandler = async () => {
//   const authData = {
//     email: this.state.formControls.email.value,
//     password: this.state.formControls.password.value,
//     returnSecureToken: true,
//   };
//   try {
//     const response = await axios.post(
//       "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCZQKtLW2Xv2VNvTSL58QD3S6YHMX7SK5I",
//       authData
//     );

//     console.log(response.data);
//   } catch (e) {
//     console.log(e);
//   }
// };

// registerHandler = async () => {
//   const authData = {
//     email: this.state.formControls.email.value,
//     password: this.state.formControls.password.value,
//     returnSecureToken: true,
//   };
//   try {
//     const response = await axios.post(
//       "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCZQKtLW2Xv2VNvTSL58QD3S6YHMX7SK5I",
//       authData
//     );

//     console.log(response.data);
//   } catch (e) {
//     console.log(e);
//   }
// };
