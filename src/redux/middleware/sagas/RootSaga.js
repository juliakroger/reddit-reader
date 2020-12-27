import { all } from "redux-saga/effects";

import { watchPostsSagas } from "./Posts";

export default function* rootSaga() {
  yield all([watchPostsSagas()]);
}
