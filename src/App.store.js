import { createStore } from "redux";
import LoaderReducer from "./common/loader/loader.reducer";
import ToolbarReducer from "./common/custom_tool_bar/customtoolbar.reducer";

var store = createStore(
  LoaderReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
