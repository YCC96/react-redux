import { put } from "redux-saga/effects";

export function* fetchUser(action) {
  try {
    console.log("fetchUser");
    yield put({
      type: "SET_USER",
      payload: {
        success: true,
        data: {
          name: "empty User"
        }
      }
    });
  } catch (e) {
    yield put({
      type: "SET_USER",
      payload: { success: false, error: e.message }
    });
  }
}
