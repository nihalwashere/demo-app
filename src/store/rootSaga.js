import { all } from "redux-saga/effects";
import rootContainerSaga from "../containers/root/state/sagas";

export default function* rootSaga() {
  yield all([rootContainerSaga()]);
}
