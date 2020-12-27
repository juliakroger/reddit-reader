import { createStore, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import RootReducer from "../reducers/RootReducer";
import saga from "redux/middleware/sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, createLogger({ collapsed: true })];

const configureStore = () => {
  const store = createStore(RootReducer, applyMiddleware(...middleware));
  sagaMiddleware.run(saga);
  return store;
};

export const store = configureStore();
