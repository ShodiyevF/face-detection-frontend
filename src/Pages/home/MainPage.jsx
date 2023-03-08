import { Outlet, Route, Routes } from "react-router-dom";
import Leftbar from "../../components/menu/Leftbar";
import Navbar from "../../components/menu/Navbar";
import "./home.css";

export default function MainPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 shablon">
          <Leftbar />
        </div>
        <div className="col-md-10 shablon">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
