import React, { useState } from "react";
import icon from "../../utils/icons/users.png";
import iconFilter from "../../utils/icons/filter.png";
import "./users.css";
import User_Modal from "../../components/modal/User_Modal";

function User() {
  const [isopenModal, setIsOpenModal] = useState(false);

  function openModal() {
    setIsOpenModal(!isopenModal)
  }

  const data = [
    {
      user_id: 1,
      user_firstname: "bir",
      user_lastname: "bir",
      user_img: icon,
      user_email: "test@test.com",
      user_createdat: "2023 - 03 - 04",
      role_id: { role_name: "Dasturchi" },
    },

    {
      user_id: 1,
      user_firstname: "bir",
      user_lastname: "bir",
      user_img: icon,
      user_email: "test@test.com",
      user_createdat: "2023 - 03 - 04",
      role_id: { role_name: "Dasturchi" },
    },
    // {
    //   user_id: 2,
    //   user_firstname: "bir",
    //   user_lastname: "bir",
    //   user_img: icon,
    //   user_email: "test@test.com",
    //   user_createdat: "2023 - 03 - 04",
    //   role_id: { role_name: "Dasturchi" },
    // },
    {
      user_id: 3,
      user_firstname: "bir",
      user_lastname: "bir",
      user_img: icon,
      user_email: "test@test.com",
      user_createdat: "2023 - 03 - 04",
      role_id: { role_name: "Dasturchi" },
    },
  ];
  return (
    <>
      {isopenModal && <User_Modal  setIsOpenModal={setIsOpenModal} />}
      <div className="user_page">
        {/* Modal ochadigan oyna */}
        <div className="modal_button">
          <button className="open_model_button" onClick={openModal}>
            <i class="fa-regular fa-plus"></i>
            Yangi hodimlar qo'shish
          </button>
          <button className="filter_model_button">
            <img src={iconFilter} alt="icon" />
            Filter
          </button>
        </div>
        {/* Modal ochadigan oyna */}
        <table class="user_ul">
          <thead className="first_child ">
            <tr>
              <th>Hodim</th>
              <th>Email</th>
              <th>Qabul qilingan sana</th>
              <th>Kasb</th>
              <th>Tahrirlash</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((person) => {
              return (
                <tr className="user_list">
                  <td className="item_show">
                    <img src={icon} alt="avatar" />
                  </td>
                  <td className="item_show">{person.user_email}</td>
                  <td className="item_show">
                    {person.user_createdat.toString()}
                  </td>
                  <td className="item_show">{person.role_id.role_name}</td>
                  <td className="item_show">
                    <button className="user_list_green">
                      <i
                        class="fa-regular fa-pen-to-square user_btn_icons"
                        style={{ marginRight: "5px" }}
                      ></i>
                      Tahrirlash
                    </button>
                    <button className="user_list_red">
                      <i
                        class="fa-regular fa-trash-can user_btn_icons"
                        style={{ marginRight: "5px" }}
                      ></i>
                      O'chirish
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tr className="user_list_extra">
            <td className="item_show"></td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default User;
