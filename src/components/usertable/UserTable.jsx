import React from "react";

function UserTable({data}) {
  return (
    <div className="tableContainer">
      {data.length ? (
        <table className="user_ul" >
          <thead>
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
                  <td className="item_show">
                    <img src={person.icon} alt="avatar" />
                  </td>
                  <td className="item_show">{person.user_email}</td>
                  <td className="item_show">
                    {person.user_createdat.toString()}
                  </td>
                  <td className="item_show">{person.role_id.role_name}</td>
                  <td className="item_show">
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
      ) : (
        <h5 className="text-center">Ma'lumotlar yo'q</h5>
      )}
    </div>
  );
}

export default UserTable;
