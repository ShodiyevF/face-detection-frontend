import React from 'react'

function DeleteModal() {
  return (
    <div className="wrapper-modal">
      <center>
        <div className="delete-modal">
          <h1>Filialni o'chirish</h1> <br />
          <h4>
            <span className="text-danger">Nasiya Savdo 1</span> filialini
            o'chirishni istaysizmi ?
          </h4>{" "}
          <br />
          <div className="buttons-group d-flex align-items-center justify-content-center gap-3">
            <button className="green ps-5 pe-5 pt-2 pb-2">O'chirish</button>
            <button className="green-border ps-5 pe-5 pt-1 pb-1">
              Bekor qilish
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default DeleteModal
