import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { authreducer } from "./auth/auth.reducer";
import { cartreducer } from "./cart/cart.reducer";
import { productreducer } from "./product/product.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authreducer,
  cart: cartreducer,
  products: productreducer,
});

const createComposer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
