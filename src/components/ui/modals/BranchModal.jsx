import React from 'react'

function BranchModal() {
  return (
    <div className="wrapper-modal">
      <center>
        <div className="modal-branch">
          <h1>Filial</h1>
          <hr />
          <div className="modal-body">
            <h4>Filial nomini kiriting</h4>
            <input type="text" placeholder="Filial nomini kiriting..." />
          </div>
          <hr />
          <div className="buttons-group d-flex align-items-center justify-content-end gap-3">
            <button className="red">Bekor qilish</button>
            <button className="green">Saqlash</button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default BranchModal
