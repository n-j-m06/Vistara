import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StatePage from "./pages/StatePage";
import Admin from "./pages/Admin";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/home"
          element={<Dashboard />}
        />

        <Route
          path="/state/:stateId"
          element={<StatePage />}
        />

        <Route
        path="/admin"
        element={<Admin />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;