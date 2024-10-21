export const initState = {
  count: 0,
  isLoading: false,
  isError:false,
  errMsg:""
};

export const countReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "ADD_COUNT":
      return { count: state.count + 1, isLoading: false };
    case "LOADING":
      return { ...state, isLoading: true };
    case "SUB_COUNT":
      return { count: state.count - 1, isLoading: false };
    case "ERROR":
      return { ...state, isError: true, errMsg: "Error Message" } ;
    default:
      return { ...state };
  }
};