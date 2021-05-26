import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialStoreState, reducers, StoreState, StoreActionTypes } from "./store";

// Stworzenie Store'a:
const store = createStore<StoreState, StoreActionTypes, any, any>
(
    reducers, 
    initialStoreState,          // dane zainicjalizowane za pierwszym razem
    composeWithDevTools()
);

export default store;
