import Header from "../components/Header";
import LogRegStyles from "../styles/loginRegister.module.css";
import Link from "next/link";
import Router from "next/router"; //编程式跳转必须引入
import React, { useState, useEffect } from "react";
const Register = (props) => {
  //Goback
  function GoBack() {
    Router.push("/");
  }
  //Go to Login
  function goLogin() {
    Router.push("/login");
  }
  // Setstate声明
  const [Register, setRegister] = useState({
    account: "",
    password1: "",
    password2: "",
  });
  const GetAccount = (e) => {
    setRegister({ ...Register, account: e.target.value });
  };

  function getPwd1(e) {
    setRegister({ ...Register, password1: e.target.value });
  }
  function getPwd2(e) {
    setRegister({ ...Register, password2: e.target.value });
  }
  function submit() {
    const aco = Register.account;
    const pwd1 = Register.password1;
    const pwd2 = Register.password2;
    window.localStorage.setItem("name", aco);
    window.localStorage.setItem("password1", pwd1);
    window.localStorage.setItem("password2", pwd2);
    if (aco == "") {
      alert("The Account can't be empty");
    } else if (pwd1 == "" || pwd2 == "") {
      alert("The Password can't be empty");
    } else if (pwd1 != pwd2) {
      alert("The password is inconsistent");
    } else {
      alert("Register Success");
      Router.push("/login");
    }
  }
  return (
    <div>
      <div>
        <Header></Header>
        <div className={LogRegStyles.loginBbox}>
          <div className={LogRegStyles.main}>
            <div className={LogRegStyles.topHead}>
              <p className={LogRegStyles.back} onClick={GoBack}>
                &lt;back
              </p>
              <p className={LogRegStyles.logo}>CryptoCoinExchange注册</p>
            </div>
            <div className={LogRegStyles.body}>
              <div className={LogRegStyles.AccountBox}>
                <span className={LogRegStyles.LeftSub}>Account:</span>
                <input
                  className={LogRegStyles.puts}
                  placeholder="Please enter the accuount"
                  name="account"
                  onChange={GetAccount}
                  maxLength="10"
                />
              </div>
              <div className={LogRegStyles.PwdBox}>
                <span className={LogRegStyles.LeftSub}>PassWord:</span>
                <input
                  className={LogRegStyles.puts}
                  type="password"
                  placeholder="Please enter the password"
                  name="password1"
                  onChange={getPwd1}
                />
              </div>
              <div className={LogRegStyles.PwdBox}>
                <span className={LogRegStyles.LeftSub}>Again PassWord:</span>
                <input
                  className={LogRegStyles.puts}
                  type="password"
                  placeholder="Please again enter the password"
                  name="password2"
                  onChange={getPwd2}
                />
              </div>
              <div className={LogRegStyles.SubmitBox}>
                <button className={LogRegStyles.submit} onClick={submit}>
                  Register
                </button>
                <p className={LogRegStyles.ToReg} onClick={goLogin}>
                  Go to Login In
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
