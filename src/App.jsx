import "./App.css";
import Login from "./components/Login/Login";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
