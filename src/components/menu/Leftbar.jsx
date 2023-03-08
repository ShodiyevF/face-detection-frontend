import React from "react";
import { NavLink } from "react-router-dom";
import fourSquare from '../../utils/icons/four_square.png'
import phone from '../../utils/icons/phone.png'
import users from '../../utils/icons/users_white.png'

function Leftbar() {

  let btsMass =[
    {id:1,icon:fourSquare,title:"Asosiy menu",link:""},
    {id:2,icon:phone,title:"Filiallar",link:""},
    {id:3,icon:users,title:"Xodimlar",link:""},
  ]

  return (
    <div className="left_bar">
      <div className="logo">
        <p id="logo">LOGO</p>
      </div>
      <div className="btns">
        {
          btsMass?.map((s)=>{
            
            return(
              <NavLink className="btn_navigate btn " key={s.id} >
                <img src={s.icon} alt="icons" className="icons_img mx-2" />
                <span>{s.title}</span>
              </NavLink>
            )
          })
        }
      </div>
    </div>
  );
}

export default Leftbar;
