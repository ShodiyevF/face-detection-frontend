import React, { useState } from "react";
import icon from "../../utils/icons/users.png";
import iconFilter from "../../utils/icons/filter.png";
import "./users.css";
import User_Modal from "../../components/modal/User_Modal";
import UserSearchAndFilter from "../../components/userSearch/UserSearchAndFilter";
import UserTable from "../../components/usertable/UserTable";

function User() {
  const [isopenModal, setIsOpenModal] = useState(false);
  const [isopenFilter, setIsOpenFilter] = useState(false);

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
    {
      user_id: 2,
      user_firstname: "bir",
      user_lastname: "bir",
      user_img: icon,
      user_email: "test@test.com",
      user_createdat: "2023 - 03 - 04",
      role_id: { role_name: "Dasturchi" },
    },
    {
      user_id: 3,
      user_firstname: "bir",
      user_lastname: "bir",
      user_img: icon,
      user_email: "test@test.com",
      user_createdat: "2023 - 03 - 04",
      role_id: { role_name: "Dasturchi" },
    },
    {
      user_id: 3,
      user_firstname: "bir",
      user_lastname: "bir",
      user_img: icon,
      user_email: "test@test.com",
      user_createdat: "2023 - 03 - 04",
      role_id: { role_name: "Dasturchi" },
    },
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
      {isopenModal && <User_Modal setIsOpenModal={setIsOpenModal} />}
      <div className="user_page">
        {/* Modal ochadigan oyna */}
        <div className="modal_button">
          <button
            className="open_model_button"
            onClick={() => setIsOpenModal(true)}
          >
            <i class="fa-regular fa-plus"></i>
            Yangi hodimlar qo'shish
          </button>
          <button
            className="filter_model_button"
            onClick={() => setIsOpenFilter(!isopenFilter)}
          >
            <img src={iconFilter} alt="icon" />
            Filter
          </button>
        </div>
        {isopenFilter && <UserSearchAndFilter />}
        {/* <UserTable data={data} /> */}
        {/* <div className="table"> */}
        <div className="tale_box">
          <table className="table_box">
            <thead className="sticky-top">
              <tr className="first_child">
                <th>Hodim</th>
                <th>Email</th>
                <th>Qabul qilingan sana</th>
                <th>Kasb</th>
                <th>Tahrirlash</th>
              </tr>
            </thead>
            <tbody className="user_tbody">
              {data?.map((person) => {
                return (
                  <tr className="user_list">
                    <td className="">
                      <img src={person.icon} alt="avatar" />
                    </td>
                    <td className="">{person.user_email}</td>
                    <td className="">
                      {person.user_createdat.toString()}
                    </td>
                    <td className="">{person.role_id.role_name}</td>
                    <td className="">
                      <button className="user_list_green mx-1">
                        <i
                          class="fa-regular fa-pen-to-square user_btn_icons"
                          style={{ marginRight: "5px" }}
                        ></i>
                        Tahrirlash
                      </button>
                      <button className="user_list_red mx-1">
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
          </table>
        </div>
      </div>
    </>
  );
}

export default User;
