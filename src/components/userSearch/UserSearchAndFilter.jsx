import React from "react";
import "./user_search_and_filter.css";
import SoloSelect from "../selection/SoloSelect";
function UserSearchAndFilter() {
  const kasblar = [
    { role_id: 1, role_name: "Dasturchi" },
    { role_id: 2, role_name: "Sotuvchi" },
    { role_id: 3, role_name: "Meneger" },
    { role_id: 4, role_name: "Farrosh" },
  ];
  return (
    <div className="user_search_and_filter">
      <div className="user_filter_inputs">
        <label
          for="exampleInputEmail1"
          className="form-label label_text_filter"
        >
          Ism
        </label>
        <input
          type="email"
          className="form-control user_input_field"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="user_filter_inputs">
        <label
          for="exampleInputEmail1"
          className="form-label label_text_filter"
        >
          Email
        </label>
        <input
          type="email"
          className="form-control user_input_field"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="user_filter_inputs">
        <label
          for="exampleInputEmail1"
          className="form-label label_text_filter"
        >
          Kasbi
        </label>
        <select className="form-control user_input_field">
          {kasblar?.map((item) => {
            return <SoloSelect name={item.role_name} value={item.role_id} />;
          })}
        </select>
      </div>
      <div className="filter_search_btn">
        <div>
          <p style={{ margin: "0px" }}>Qidirish</p>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}

export default UserSearchAndFilter;
