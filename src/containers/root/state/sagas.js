import { takeEvery, put, call, all } from "redux-saga/effects";
import { GET_USERS_LIST } from "./types";
import { setUsersList, setIsLoading } from "./actions";
import { getUsersList } from "../../../utils/api";

function* getUsersListHandler() {
  try {
    yield put(setIsLoading(true));

    const response = yield call(getUsersList);

    if (response && response.data && response.data.length) {
      yield all([
        yield put(setUsersList(response.data)),
        yield put(setIsLoading(false)),
      ]);
    } else {
      yield put(setIsLoading(false));
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* watchRoot() {
  yield takeEvery(GET_USERS_LIST, getUsersListHandler);
}
