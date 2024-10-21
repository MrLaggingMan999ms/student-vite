import { useState } from "react";
import Student from "./component/Student/Student";
import Post from "./Post";
import Count from "./component/Reducer/Count";
function App() {
  
  return (
    <div className="container mx-auto">
       <Student/>
       {/* <Count/> */}
    </div>
  )
};

export default App;
