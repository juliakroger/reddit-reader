import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "redux/reducers/Main";
import { getTopPosts } from "utils/api/TopPostsApi";

export function* watchPostsSagas() {
  yield takeEvery(actions.getMainPagePosts.type, getMainPagePosts);
}

export function* getMainPagePosts() {
  yield put(actions.updateLoading(true));
  const data = yield call(getTopPosts);
  yield put(actions.updatePosts(data));
  yield put(actions.updateLoading(false));
}
