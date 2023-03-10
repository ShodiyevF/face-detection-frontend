import React from "react";
import { NavLink } from "react-router-dom";
import fourSquare from "../../utils/icons/four_square.png";
import phone from "../../utils/icons/phone.png";
import users from "../../utils/icons/users_white.png";

function Leftbar() {
  let btsMass = [
    { id: 1, icon:"fa-solid fa-bars mx-2", title: "Asosiy menu", link: "/" },
    { id: 2, icon:"fa-solid fa-code-branch mx-2", title: "Filiallar", link: "/branches" },
    { id: 3, icon:"fa-solid fa-users mx-2", title: "Xodimlar", link: "/users" },
  ];
  return (
    <div className="left_bar">
      <div className="logo">
        <p id="logo">LOGO</p>
      </div>
      <div className="btns">
        {btsMass?.map((s) => {
          return (
            <NavLink className="btn_navigate btn " to={s.link} key={s.id}>
              <i class={s.icon} ></i>
              <span>{s.title}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Leftbar;
