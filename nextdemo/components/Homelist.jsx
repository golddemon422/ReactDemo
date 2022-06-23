//子组件
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Router from "next/router"; //编程式跳转必须引入
function HomeList(props) {
  //对详情页面跳转传参
  function GoDetail(item) {
    Router.push({
      pathname: "/detail",
      query: item,
    })
  }

  return <div>
    <ul className={styles.cryptobox}>
      {
        props.data.map(item => {
          return (
            <li className={styles.content} key={item.id} onClick={() => { GoDetail(item) }} >
              <div className={styles.splitBox}>
                <div className={styles.boxarea}>
                  <p className={styles.CoinName}>{item.name}</p>
                  <p className={item.AmountofIncrease==="UP"?styles.range:styles.downup}>{item.AmountofIncrease}</p>
                  <p className={item.AmountofIncrease==="UP"?styles.range:styles.downup} >{item.range}</p>
                </div>
                <div className={styles.priceBox}>
                  {item.price}
                </div>
                <div className={styles.volBox}>
                  24&nbsp;HVOL&nbsp;{item.vol}
                </div>
              </div>
              <div className={styles.linemap}>
                <div className={styles.line}></div>
              </div>
            </li>
          )
        })
      }
    </ul>
  </div>;
}

export default HomeList;
