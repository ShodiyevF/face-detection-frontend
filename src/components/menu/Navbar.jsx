import React from "react";

function Navbar() {
  let img =
    "https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg";
  return (
    <div className="navbar_top">
        <div className="search">
          <input
            type="text"
            className="search_place"
            placeholder="Bu yerdan qidiring"
          />
          <i class="fa-solid fa-magnifying-glass" id="search"></i>
        </div>
        {/* boxSized */}
        <div style={{ margin: "0px 100px" }}></div>
        {/* user admin route */}
        <div className="avatar">
          <img
            src="https://png.pngtree.com/element_our/png/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg"
            alt="avatar"
          />
          <div class="dropdown drd_btn" style={{ background: "#fff" }}>
            <button
              class="btn btn-white dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Admin
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Navbar;
