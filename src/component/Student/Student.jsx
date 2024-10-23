import { useCallback, useContext, useMemo, useState } from "react";
import { StudentContext } from "../context/StudentProvider";
const Student = () => {
    
    const {state} = useContext(StudentContext)
     
    console.log(state);
    
    return (
    <div>
        Total Students: {state.isLoading ? "loading..." : state.data.length}
    </div>
  )
}

export default Student