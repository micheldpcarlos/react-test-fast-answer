import React, { useState } from "react";

import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

export default function App() {
  const [auth, setAuth] = useState({
    token: "",
    user: {},
    meta: {},
  });

  const onLoginSuccess = (auth) => {
    setAuth(auth);
  };

  const onLogOut = (e) => {
    setAuth({
      token: "",
      user: {},
      meta: {},
    });
  };

  const currentPage = () => {
    return auth.token ? (
      <Dashboard authState={auth} setAuth={setAuth} />
    ) : (
      <LoginForm onLoginSuccess={onLoginSuccess} />
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a className="navbar-brand mr-auto" href="#">
          AppCo
        </a>

        {auth.token && (
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={onLogOut}>
                Log out
              </a>
            </li>
          </ul>
        )}
      </nav>
      <div className="container">{currentPage()}</div>
    </div>
  );
}
