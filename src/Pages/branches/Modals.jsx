
function BranchModal() {
  return (
    <div className="wrapper-modal">
      <div className="branch-modal">
        <div className="head-modal">
          <h1>Filial</h1>
          <i
            className="fa-solid fa-close"
            // onClick={() => setIsBranchModal(false)}
          ></i>
        </div>
        <hr />
        <div className="body-modal">
          <h4>Filial nomini kiriting</h4>
          <input
            // onChange={(e) => handle(e)}
            type="text"
            id="branch_name"
            // value={post.branch_name}
            placeholder="Ps: Nasiya Savdo 1"
          />
        </div>
        <hr />
        <div className="foot-modal d-flex align-items-center gap-3 justify-content-end">
          <button className="red" /* onClick={() => setIsBranchModal(false)} */>
            Bekor qilish
          </button>
          <button className="green" /* onClick={() => setIsSmallModal(true)} */>
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
}

function alertModalSuccesDelete() {
  return (
    <div className="wrapper-modal">
      <div className="small-modal">
        <center>
          <h4>Mu'vaffaqiyatli o'chirildi</h4>
          <p>Nasiya savdo 2 filiali mu'vaffaqiyatli o'chirildi</p>
          <button className="green" /* onClick={() => closeModal()} */>
            OK
          </button>
        </center>
      </div>
    </div>
  );
}
function alertModalSuccesPost() {
  return (
    <div className="wrapper-modal">
      <div className="small-modal">
        <center>
          <p>Filial mu'vaffaqiyatli qo'shildi</p>
          <button className="green" /* onClick={() => closeModal()} */>
            OK
          </button>
        </center>
      </div>
    </div>
  );
}
function alertModalSuccesPatch() {
  return (
    <div className="wrapper-modal">
      <div className="small-modal">
        <center>
          <p>Filial mu'vaffaqiyatli o'zgartirildi</p>
          <button className="green" /* onClick={() => closeModal()} */>
            OK
          </button>
        </center>
      </div>
    </div>
  );
}
function alertModalWarning() {
  return (
    <div className="wrapper-modal">
      <div className="small-modal">
        <center>
          <h4>Xatolik!</h4>
          <p>Bu filialda boshqa foydalanuvchi bor</p>
          <button className="red" /* onClick={() => closeModal()} */>
            OK
          </button>
        </center>
      </div>
    </div>
  );
}

function deleteModal() {
  return (
    <div className="wrapper-modal">
    <div className="delete-modal">
      <center>
        <h4>Filialni o'chirish</h4>
        <p>
          <span className="text-danger">Nasiya savdo 2</span> filialini
          o'chirishni istayszmi?
        </p>
        <div className="button-group d-flex align-item-center justify-content-center gap-5">
          <button className="green" /* onClick={() => close()} */>
            O'chirish
          </button>
          <button
            className="green-border"
            // onClick={() => setDeleteModal(false)}
          >
            Bekor qilish
          </button>
        </div>
      </center>
    </div>
  </div>
  )
}
export {
  BranchModal,
  alertModalSuccesDelete,
  alertModalSuccesPost,
  alertModalSuccesPatch,
  alertModalWarning,
  deleteModal,
};


