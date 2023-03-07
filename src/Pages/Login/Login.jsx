import React from "react";
import './Login.css'
function Login() {
  // const input_login = document.querySelector(".input_login"),
  //   input_password = document.querySelector("input_password");

  // fetch(Domain + "/api/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     user_email: input_login.value.toString(),
  //     user_password: input_password.value.toString(),
  //   }),
  // });
  return (
    <div className="container">
      <center>
        <div className="login">
          <h1>Tizimga kirish</h1>
          <p>Boshqaruv paneliga o'tish</p>
          <form>
            <label htmlFor="Email">Email</label>
            <input type="email" className="form-control input_login" />
            <br />
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control input_password" />
            <br />
            <center>
              <button type="submit" className="button">
                Kirish
              </button>
            </center>
          </form>
        </div>
      </center>
    </div>
  );
}

export default Login;
