import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import StudentScreen from "./screens/Student";

import Layout from "./component/Layout";
import ProtectRoutes from "./component/ProtectRoutes";
import LogIn from "./screens/Login";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectRoutes />}>
              <Route path="/student" element={<StudentScreen />} />
            </Route>
          </Route>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
