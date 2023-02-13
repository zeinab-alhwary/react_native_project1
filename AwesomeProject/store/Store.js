import { createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import faveReducer from "./reduser";


const store=createStore(faveReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store;