import React, { useState, useContext } from "react";
import LogRegFields from "./login/logRegFields";
import { ReactComponent as Logo } from "../../images/logo-white.svg";
import { ReactComponent as Caret } from "../../images/caret.svg";
import { ReactComponent as SignOut } from "../../images/sign-out-alt-light.svg";
import { Link } from "react-router-dom";

import { DataContext } from "../../context/DataContext";

const NavBar = () => {
  const { token, refreshAppHandler } = useContext(DataContext);
  const [dropDown, setDropDown] = useState(false);
  const [loginRegister, setLoginRegister] = useState(false);

  const loginRegisterHandler = (e) => {
    e.preventDefault();
    setLoginRegister(!loginRegister);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <Link to='/'>
            <Logo className="logo" />
          </Link>
          <ul className="navbar-nav">
            <NavItem
              icon={<Caret />}
              dropDown={dropDown}
              setDropDown={setDropDown}
            >
              <aside className="dropdown">
                <div className="menu">
                  <Link
                    to={`/`}
                    className="menu-item"
                    onClick={() => {
                      setDropDown(false);
                    }}
                  >
                    Marketplace{" "}
                  </Link>
                  <Link
                    to={`/voice`}
                    className="menu-item"
                    onClick={() => {
                      setDropDown(false);
                    }}
                  >
                    All Users
                  </Link>
                  <hr />
                  {token ? (
                    <>
                      <a
                        href={`/voice/${token.display_name}`}
                        className="menu-item"
                        onClick={() => {
                          setDropDown(false);
                        }}
                      >
                        My Profile
                      </a>
                      <button
                        className="menu-item"
                        lefticon={SignOut}
                        onClick={(e) => {
                          e.preventDefault();
                          setDropDown(false);
                          localStorage.removeItem("token");
                          window.location.href = "/";
                        }}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <LogRegFields
                      setDropDown={setDropDown}
                      className="login-item"
                      register={loginRegister}
                      loginRegisterHandler={loginRegisterHandler}
                      setLoginRegister={setLoginRegister}
                    />
                  )}
                </div>
              </aside>
            </NavItem>
          </ul>
        </nav>
      </header>
    </>
  );
};

const NavItem = ({ children, icon, dropDown, setDropDown }) => {
  return (
    <li className="nav-item">
      <button
        className={dropDown ? "icon-button selected" : "icon-button"}
        onClick={(e) => {
          e.preventDefault();
          setDropDown(!dropDown);
        }}
      >
        {icon}
      </button>
      {dropDown && children}
    </li>
  );
};

export default NavBar;
