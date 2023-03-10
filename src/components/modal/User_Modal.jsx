import React, { useState } from "react";
import "./user_modal.css";
import exit from "../../utils/icons/exit.png";
import MultiSelect from "../selection/MultiSelect";
import SoloSelect from "../selection/SoloSelect";
function User_Modal({ setIsOpenModal }) {
  const [avatar, setAvatar] = useState("");

  const filials = [
    { id: 1, branch_name: "Pokiza" },
    { id: 2, branch_name: "Nasiya savdo 1" },
    { id: 3, branch_name: "Nasiya savdo 2" },
    { id: 4, branch_name: "Nasiya savdo 3" },
  ];
  const kasblar = [
    { role_id: 1, role_name: "Dasturchi" },
    { role_id: 2, role_name: "Sotuvchi" },
    { role_id: 3, role_name: "Meneger" },
    { role_id: 4, role_name: "Farrosh" },
  ];

  return (
    <div className="user_modal" onClick={() => setIsOpenModal(false)}>
      <div className="user_modal_place" onClick={(e) => e.stopPropagation()}>
        <div className="header_modal">
          <h3>Hodim</h3>
          <img
            src={exit}
            alt="exit_icnon"
            className="exit_user_icnon"
            onClick={() => setIsOpenModal(false)}
          />
        </div>
        <div className="form_user_modal">
          <form>
            <div className="col ">
              <label for="exampleInputEmail1" className="form-label label_text">
                Ism
              </label>
              <input
                type="text"
                className="form-control user_input_field"
                placeholder="Holid"
              />
            </div>
            <div className="col ">
              <label for="exampleInputEmail1" className="form-label label_text">
                Familiya
              </label>
              <input
                type="text"
                className="form-control user_input_field"
                placeholder="Validov"
              />
            </div>
            <div className="col ">
              <label for="exampleInputEmail1" className="form-label label_text">
                Asosiy filial
              </label>
              <select className="form-control user_input_field">
                {filials?.map((item) => {
                  return <SoloSelect name={item.branch_name} value={item.id} />;
                })}
              </select>
            </div>
            <div className="col ">
              <label for="exampleInputEmail1" className="form-label label_text">
                Ruxsat etilgan filial
              </label>
              <MultiSelect />
            </div>
            <div className="col ">
              <label for="exampleInputEmail1" className="form-label label_text">
                Kasbi
              </label>
              <select className="form-control user_input_field">
                {kasblar?.map((item) => {
                  return (
                    <SoloSelect name={item.role_name} value={item.role_id} />
                  );
                })}
              </select>
            </div>
            <div className="col ">
              <label for="exampleInputEmail1" className="form-label label_text">
                Email
              </label>
              <input
                type="email"
                className="form-control user_input_field"
                placeholder="user@gmail.com"
              />
            </div>
            <div className="col ">
              <label for="exampleInputEmail1" className="form-label label_text">
                Parol
              </label>
              <input
                type="password"
                className="form-control user_input_field"
                placeholder="*****"
              />
            </div>
            <div className="col upload_image_place">
              <label className="form-label label_text">
                Rasm
                <input
                  hidden
                  type="file"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  className="user_input_field"
                  accept=""
                />
      
                <div className="user_input_field_file text-center">
                  {
                    avatar ? <span>{avatar.name?.slice(25)}</span> : <span>rasm</span>
                  }
                </div>
              </label>
              <div className="avatar_place">
                {avatar && (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="avatar"
                    className="avatar_picture"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User_Modal;
