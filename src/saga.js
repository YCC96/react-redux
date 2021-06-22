import { takeEvery } from "redux-saga/effects";
import { fetchUser } from "./sagas";

export function* mySaga() {
  yield takeEvery("USER", fetchUser);
}
