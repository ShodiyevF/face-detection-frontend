import React from "react";
import icon from "../../utils/icons/users.png";
import "./users.css";

function User() {
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
              <td className="item_show">{person.user_createdat.toString()}</td>
              <td className="item_show">{person.role_id.role_name}</td>
              <td className="item_show">
                <button className="user_list_green">Tahrirlash</button>
                <button className="user_list_red">O'chirish</button>
              </td>
            </tr>
          );
        })}
      </tbody>

      <tr className="user_list_extra">
            <td className="item_show"></td>
          </tr>
    </table>
  );
}

export default User;
