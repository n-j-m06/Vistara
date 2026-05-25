import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StatePage from "./pages/StatePage";

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

      </Routes>

    </BrowserRouter>

  );
}

export default App;