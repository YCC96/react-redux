import { USER, SET_USER } from "./actionTypes";

export function userAction(data) {
  return {
    type: USER,
    payload: data
  };
}
export function setUserAction(data) {
  return {
    type: SET_USER,
    payload: data
  };
}
