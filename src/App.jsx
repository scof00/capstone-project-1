import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./views/applicationViews.jsx";
import { Login } from './components/auth/login'
import { Register } from './components/auth/register'
import { Authorized } from './views/Authorized'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  )
}

export default App;
