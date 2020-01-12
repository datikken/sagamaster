import { delay } from "redux-saga/effects";
import { take, put, call, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import { GET_CURRENT_USER_INFO, setCurrentUser } from "../actions";

export function* currentUserSaga() {
  //takes an action
  const { id } = yield take(GET_CURRENT_USER_INFO);
  console.log("user id", id);
  const response = yield call(fetch, `http://localhost:8081/user/${id}`);
  const data = yield apply(response, response.json);
  console.log(data);
  yield put(setCurrentUser(data));
}
