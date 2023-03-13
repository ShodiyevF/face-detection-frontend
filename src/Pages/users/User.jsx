import React, { useEffect, useState } from "react";
import icon from "../../utils/icons/users.png";
import iconFilter from "../../utils/icons/filter.png";
import "./users.css";
import User_Modal from "../../components/modal/User_Modal";
import UserSearchAndFilter from "../../components/userSearch/UserSearchAndFilter";
import axios from "axios";
import moment from "moment";

function User() {
  // data
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  async function loadUsers() {
    let { data } = await axios.get("/users");
    if (data) {
      console.log(data);
      setUsers(data);
    }
  }
  const [isopenModal, setIsOpenModal] = useState(false);
  const [isopenFilter, setIsOpenFilter] = useState(false);

  // moment(p.createdAt).fromNow()
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
        {/* table uchun maxsus */}
        {users.length ? (
          <div
            className="div_table"
            style={{ height: isopenFilter ? "350px" : "400px" }}
          >
            <div className="div_table_head">
              <p>Hodim</p>
              <p>Email</p>
              <p>Qabul qilingan sana</p>
              <p>Kasbi</p>
              <p>Tahrirlash</p>
            </div>
            <div className="div_table_body">
              {users?.map((item, idx) => {
                return (
                  <div className="div_table_tbody">
                    <span className="span_table_item">
                      {item.user_firstname}
                    </span>
                    <span className="span_table_item">
                      {item.user_email?.slice(0, 15)}...
                    </span>
                    <span className="span_table_item">
                      {moment(item?.createdat).format("DD. MM. YYYY")}
                    </span>
                    <span className="span_table_item">
                      {item?.role?.role_name}
                    </span>
                    <span className="span_table_item_btns">
                      <button className="user_list_green">
                        <i class="fa-regular fa-trash-can"></i>
                        Tahrirlash
                      </button>
                      <button className="user_list_red">
                        <i class="fa-regular fa-pen-to-square"></i>
                        O'chirish
                      </button>
                    </span>
                  </div>
                );
              })}

              {/* test uchun */}
              {/* <div className="div_table_tbody">
              <span className="span_table_item">Qurbonov Bahdorijon</span>
              <span className="span_table_item">
                qurbonovbahodirjonpersonal1817@gmail.com
              </span>
              <span className="span_table_item">2023 - 03 - 04</span>
              <span className="span_table_item">Dasturchi</span>
              <span className="span_table_item_btns">
                <button className="user_list_green">
                  <i class="fa-regular fa-trash-can"></i>
                  Tahrirlash
                </button>
                <button className="user_list_red">
                  <i class="fa-regular fa-pen-to-square"></i>
                  O'chirish
                </button>
              </span>
            </div> */}
            </div>
          </div>
        ) : (
          <h3 className="text-center">Ma'lumotlar topilmadi</h3>
        )}
      </div>
    </>
  );
}

export default User;
