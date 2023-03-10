import axios from "axios";
import React, { useState } from "react";
import { Domain } from "../../Domain";
import './Login.css'
function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [login , setLogin] = useState(0)

  function submit(e) {
    e.preventDefault()
    axios.post(Domain + '/login', {
      "user_email": data.email,
      "user_password": data.password
    })
      .then(data => setLogin(data))
      .catch(err => console.log(err.data.message))
    if (login.status === 200) {
      localStorage.setItem("token", login.data.token);
      window.location = '/'
    }
  }
    console.log(login.status);
    console.log(login);

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value;
    setData(newData)
  }


  return (
    <div className="container">
      <center>
        <div className="login">
          <h1>Tizimga kirish</h1>
          <p>Boshqaruv paneliga o'tish</p>
          <form onSubmit={(e)=>submit(e)}>
            <label htmlFor="Email">Email</label>
            <input
              onChange={(e) => handle(e)}
              id="email"
              value={data.email}
              type="email"
              className="form-control input_login"
              placeholder="Email"
            />
            <br />
            <label htmlFor="Password">Password</label>
            <input
              onChange={(e) => handle(e)}
              id="password"
              value={data.password}
              type="password"
              placeholder="Parol"
              className="form-control input_password"
            />
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
