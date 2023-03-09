import { Route, Routes } from "react-router-dom";
import "./App.css";
import Branches from "./Pages/branches/Branches";
import MainPage from "./Pages/home/MainPage";
import Login from "./Pages/Login/Login";
import User from "./Pages/users/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />}>
          <Route path="/users" element={<User />} />
          <Route path="/branches" element={<Branches />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
