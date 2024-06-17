import { createStore } from "redux";
import { applyMiddleware } from "redux";
import rootReducer from "../redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSagas from "../redux/sagas/rootSagas";

// const store = createStore(rootReducer, applyMiddleware(thunk));
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware, thunk))
);
sagaMiddleware.run(rootSagas);

export default store;
