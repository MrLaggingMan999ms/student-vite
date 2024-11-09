const studentReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        data: action.payload,
        students: action.payload,
        isLoading: false,
      };
    case "LOADING":
      return { ...state, isLoading: true };
    case "ADD_STUDENT":
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    case "DELETE_STUDENT":
      const deleteStudent = state.data.filter(
        (st) => st._id !== action.payload._id
      );
      return {
        ...state,
        data: [...deleteStudent],
      };
    case "FILTER":
      

      const filterStudents = state.students.filter(
        (st) => {
          if (st.major == action.payload.major){
            return true;
          }else if(action.payload.major == "all"){
            return true;
          }
        } 
      );

      return {
        ...state,
        data: [...filterStudents],
      };
    default:
      return { ...state };
  }
};

export default studentReducer;
