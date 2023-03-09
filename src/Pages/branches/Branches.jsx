import React, { useState } from "react";
import "./Branches.css";
function Branches() {
  const [isBranchModal, setIsBranchModal] = useState(false);
  const [isSmallModal, setIsSmallModal] = useState(false);
  const data = [
    {
      id: 1,
      name: "Nasiya Savdo 1",
      date: "08.03.2023 11:46",
    },
    {
      id: 1,
      name: "Nasiya Savdo 1",
      date: "08.03.2023 11:46",
    },
    {
      id: 1,
      name: "Nasiya Savdo 1",
      date: "08.03.2023 11:46",
    },
    {
      id: 1,
      name: "Nasiya Savdo 1",
      date: "08.03.2023 11:46",
    },
  ];
  return (
    <div className="branches">
      <button
        className="green green-button"
        onClick={() => setIsBranchModal(true)}
      >
        <i className="fa-solid fa-circle-plus"></i> Yangi filiallar qo'shish
      </button>
      <table>
        <thead className="thead">
          <th>ID</th>
          <th>Nomi</th>
          <th>Sana</th>
          <th>Tahrirlash</th>
        </thead>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td className="d-flex align-items-center justify-content-center gap-3 mt-3">
                <button
                  className="green d-flex align-items-center"
                  onClick={() => setIsBranchModal(true)}
                >
                  <i className="fa-solid fa-edit"></i>
                  Tahrirlash
                </button>
                <button className="red d-flex align-items-center">
                  <i className="fa-solid fa-trash"></i>
                  O'chirish
                </button>
              </td>
            </tr>
          );
        })}
      </table>

      {/* Modals */}

      {isBranchModal ? (
        <div className="wrapper-modal">
          <div className="branch-modal">
            <div className="head-modal">
              <h1>Filial</h1>
              <i
                className="fa-solid fa-close"
                onClick={() => setIsBranchModal(false)}
              ></i>
            </div>
            <hr />
            <div className="body-modal">
              <h4>Filial nomini kiriting</h4>
              <input type="text" placeholder="Ps: Nasiya Savdo 1" />
            </div>
            <hr />
            <div className="foot-modal d-flex align-items-center gap-3 justify-content-end">
              <button className="red" onClick={() => setIsBranchModal(false)}>
                Bekor qilish
              </button>
              <button className="green" onClick={() => setIsSmallModal(true)}>
                Saqlash
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {isSmallModal ? (
        <div className="wrapper-modal">
          <div className="small-modal">
            <center>
              <h4>Mu'vaffaqiyatli o'chirildi</h4>
              <p>Nasiya savdo 2 filialini mu'vaffaqiyatli o'chirildi</p>
              <button className="green" onClick={() => setIsSmallModal(false)}>
                OK
              </button>
            </center>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Branches;
