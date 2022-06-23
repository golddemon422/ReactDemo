import middleStyle from "../styles/MiddleMap.module.css"
import React, { useState, useEffect } from "react";
import Kline from "./Kline"
import Information from "./Information"
function MiddleMap(props) {
    const NavbarList = ["K线", "令牌信息"]
    const [indexK, useindexK] = useState("0");
    function CheackNav(item, index) {
        if (index == "0" || index == undefined) {
            useindexK("0")
        } else {
            useindexK("1")
        }
    }
    function TabChoose() {
        if (indexK == "0") {
            return <Kline></Kline>
        } else {
            return <Information></Information>
        }
    }
    //   =============
    return (
        <div className={middleStyle.container}>
            <ul className={middleStyle.TopHead}>
                {
                    NavbarList.map((item, index) => {
                        return (
                            <li className={middleStyle.subTitle}
                                style={{ color: indexK == index ? '#16b979' : '' }}
                                key={index}
                                onClick={() => { CheackNav(item, index) }}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
            <div className={middleStyle.KBOX} >
                {TabChoose()}
            </div>
        </div>
    )

}

export default MiddleMap