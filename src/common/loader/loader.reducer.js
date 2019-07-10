import { VISIBLE, INVISIBLE } from "./loader.actions";

const LoaderReducer = (state, action) => {
  switch (action.type) {
    case VISIBLE:
      return { loader: true };
    case INVISIBLE:
      return { loader: false };
    default:
      return { loader: false };
  }
};

export default LoaderReducer;
