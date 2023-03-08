import { Route, Routes } from "react-router-dom";
import "./App.css";
import Leftbar from "./components/menu/Leftbar";
import Navbar from "./components/menu/Navbar";
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
