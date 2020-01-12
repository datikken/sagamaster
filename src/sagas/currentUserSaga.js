import { delay } from "redux-saga/effects";

export function* currentUserSaga() {
    console.log("hello from sagas");
    yield delay(5000)
    console.warn("Just to check");
}