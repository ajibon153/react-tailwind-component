import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk"

// Reducer
const initialState = {
  loggedIn: false,
  userName: "",
};

export const loginReducer = ({ state = initialState, action }) => {
  switch (action.type) {
    case "LOGIN":
      return { ...stete, loggedIn: true, userName: action.data };
    case "SIGNUP":
      return { ...stete, loggedIn: true, userName: action.data };

    default:
      return state;
  }
};

let headers = {
  "access-control-allow-origin": "*",
  "Content-Type": "application/x-www-form-urlencoded",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  // ini kalo post masih bermasalah
};

// action

export function actionLogin(params) {
  return async (dispatch) => {
    let postData = {
      userName: params.userName,
      passord: params.passord,
    };

    let result = await axios.post("http://login.com", postData, headers);
  };
}

// store

export const store = createStore(loginReducer, applyMiddleware(ReduxThunk))