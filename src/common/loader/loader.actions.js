export const VISIBLE = "VISIBLE";
export const INVISIBLE = "INVISIBLE";

export const showLoader = () => ({
  type: VISIBLE
});

export const hideLoader = () => ({
  type: INVISIBLE
});
