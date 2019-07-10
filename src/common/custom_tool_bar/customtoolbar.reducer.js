const ToolbarReducer = (state, action) => {
  console.log(action);
  return { title: action.type };
};

export default ToolbarReducer;
