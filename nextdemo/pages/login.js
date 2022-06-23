import Header from "../components/Header";
import LogRegStyles from "../styles/loginRegister.module.css";
import Link from "next/link";
import Router from "next/router"; //编程式跳转必须引入
import React, { useState, useEffect } from "react"; //基础HOOK

//HOOK增强了函数组件的写法
const Login = (paops) => {
  // back
  function GoBack() {
    Router.push("/");
  }
  //Go register
  function GoRegister() {
    Router.push("/register");
  }
  //login
  const [form, setForm] = useState({ account: "", password: "" }); //使用useState声明

  // 写法一
  function getAccount(event) {
    setForm({ ...form, account: event.target.value });
  }
  // 写法二
  const getPassword = (event) => {
    setForm({ ...form, password: event.target.value });
  };

  function submit() {
    const LoginName = form.account;
    const LoginPwd = form.password;
    const account = window.localStorage.getItem("name");
    const password = window.localStorage.getItem("password1");
    if (LoginName == "") {
      alert("The account can't be empty");
    } else if (LoginPwd == "") {
      alert("The password can't be empty");
    } else if (LoginName != account || LoginPwd != password) {
      alert("The account or password worng");
    } else {
      Router.push("/");
    }
  }
  return (
    <div>
      <Header></Header>
      <div className={LogRegStyles.loginBbox}>
        <div className={LogRegStyles.main}>
          <div className={LogRegStyles.topHead}>
            <p className={LogRegStyles.back} onClick={GoBack}>
              &lt;back
            </p>
            <p className={LogRegStyles.logo}>CryptoCoinExchange登录</p>
          </div>
          <div className={LogRegStyles.body}>
            <div className={LogRegStyles.AccountBox}>
              <span className={LogRegStyles.LeftSub}>Account:</span>
              <input
                name="account"
                className={LogRegStyles.puts}
                type="text"
                placeholder="Please enter the accuount"
                value={form.account}
                onChange={getAccount}
                maxLength="10"
              />
            </div>
            <div className={LogRegStyles.PwdBox}>
              <span className={LogRegStyles.LeftSub}>PassWord:</span>
              <input
                name="password"
                className={LogRegStyles.puts}
                type="password"
                placeholder="Please enter the password"
                value={form.password}
                onChange={getPassword}
              />
            </div>
            <div className={LogRegStyles.SubmitBox}>
              <button className={LogRegStyles.submit} onClick={submit}>
                Login In
              </button>
              <p className={LogRegStyles.ToReg} onClick={GoRegister}>
                Go to Register
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
