import styles from "../styles/Home.module.css";
import Link from "next/link";
import Router from "next/router"; //编程式跳转必须引入
import React, { useState, useEffect, useRef } from "react";
const Publictop = () => {
  //useStaate
  const [val, setval] = useState({ login: "登陆", reg: "注册" })
  //useEffect 副作用 副效应 函数
  useEffect(() => {
    const name = window.localStorage.getItem("name")
    if (name == "" || name == null) {
      setval({ ...val, login: "登陆", reg: "注册" })
    } else {
      setval({ ...val, login: name, reg: "退出" })
    }
  }, [])

  //Login
  function GotoLogin() {
    if (val.login == "登陆") {
      Router.push("/login");
    }
  }
  //Register
  const GotoReg = (() => {
    if (val.reg == "注册") {
      Router.push("/register")
    } else {
      window.localStorage.clear();
      setval({ ...val, login: "登陆", reg: "注册" })
    }
  })
  return (
    <div>
      <div className={styles.topname}>
        <h1 className={styles.logo}>
          <Link href="/">CryptoCoinExchange</Link>
        </h1>
        <ul className={styles.listbox}>
          <li className={styles.lists}>
            <Link href="/detail">主流区</Link>
          </li>
          <li className={styles.lists}>
            <Link href="/detail">MEME区</Link>
          </li>
          <li className={styles.lists}>
            <Link href="/detail">GameFi区</Link>
          </li>
          <li className={styles.lists}>
            <Link href="/detail">公链区</Link>
          </li>
          <li className={styles.lists}>
            <Link href="/detail">Defi区</Link>
          </li>
          <li className={styles.lists}>
            <Link href="/detail">创新区</Link>
          </li>
          <li className={styles.loginIn} onClick={GotoLogin}>
            {val.login}
          </li>
          <li className={styles.register} onClick={GotoReg}>
            {val.reg}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Publictop;