import axios from "axios";
import React, { useEffect, useState } from "react";
import { Domain } from "../../Domain";
import "./Branches.css";



function Branches() {
  function handle(e) {
    const newPost = { ...post };
    newPost[e.target.id] = e.target.value;
    setPost(newPost);
  }
  const [post, setPost] = useState({
    branch_name: "",
  });
  const [isBranchModal, setIsBranchModal] = useState(false);
  const [isSmallModal, setIsSmallModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [branches, setBranches] = useState([]);
  function close() {
    setDeleteModal(false);
    setIsSmallModal(true);
  }
  function closeModal() {
    setIsBranchModal(false);
    setIsSmallModal(false);
  }
  useEffect(() => {
    LoadBranches();
  }, []);
  function LoadBranches() {
    axios
      .get(Domain + "/branches")
      .then((data) => setBranches(data.data))
      .catch((err) => console.log(err.response.message));
  }

  return (
    <div className="branches">
      <button
        className="green green-button"
        onClick={() => setIsBranchModal(true)}
      >
        <i className="fas fa-plus"></i> Yangi filiallar qo'shish
      </button>
      <div className="wrapper-table">
        <table className="table">
          <thead>
            <tr className="thead">
              <th>ID</th>
              <th>Nomi</th>
              <th>Sana</th>
              <th>Tahrirlash</th>
            </tr>
          </thead>
            <tbody className="body-table">
              {branches.map((item, idx) => {
                return (
                  <tr key={idx} className="tbody">
                    <td>{idx + 1}</td>
                    <td>{item.branch_name}</td>
                    <td>{item.branch_createdat.slice(0, 10)}</td>
                    <td className="d-flex align-items-center justify-content-center gap-3">
                      <button
                        className="green d-flex align-items-center gap-1"
                        onClick={() => setIsBranchModal(true)}
                      >
                        <i className="fa-solid fa-edit"></i>
                        Tahrirlash
                      </button>
                      <button
                        className="red d-flex align-items-center gap-1"
                        onClick={() => setDeleteModal(true)}
                      >
                        <i className="fa-regular fa-trash-can"></i>
                        O'chirish
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
        </table>
      </div>

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
              <input
                onChange={(e) => handle(e)}
                type="text"
                id="branch_name"
                value={post.branch_name}
                placeholder="Ps: Nasiya Savdo 1"
              />
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
              <p>Nasiya savdo 2 filiali mu'vaffaqiyatli o'chirildi</p>
              <button className="green" onClick={() => closeModal()}>
                OK
              </button>
            </center>
          </div>
        </div>
      ) : (
        ""
      )}
      {deleteModal ? (
        <div className="wrapper-modal">
          <div className="delete-modal">
            <center>
              <h4>Filialni o'chirish</h4>
              <p>
                <span className="text-danger">Nasiya savdo 2</span> filialini
                o'chirishni istayszmi?
              </p>
              <div className="button-group d-flex align-item-center justify-content-center gap-5">
                <button className="green" onClick={() => close()}>
                  O'chirish
                </button>
                <button
                  className="green-border"
                  onClick={() => setDeleteModal(false)}
                >
                  Bekor qilish
                </button>
              </div>
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
