import {combineReducers, legacy_createStore as createStore} from "redux"; 
import proffileReducer from "./proffile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    proffilePage: proffileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducers);

export default store;