import Header from "../components/Header";
import detailStyles from "../styles/Detail.module.css";
import styles from "../styles/Home.module.css";
import Publictop from "../components/Publictop";
import Trading from "../components/TradingList";
import LeftSide from "../components/LeftDetailside";
import RightSide from "../components/RightDetailside";
import MiddleMap from "../components/MiddleMap";
import Router from "next/router"; //编程式跳转必须引入
const DetailPage = (props) => {
  return (
    <div>
      <Header></Header>
      <div className={styles.publicHead}>
        <Publictop></Publictop>
      </div>
      <div className={detailStyles.mainbox}>
        <div className={detailStyles.topBox}>
          <div className={detailStyles.leftBox}>
            <LeftSide></LeftSide>
          </div>
          <div className={detailStyles.middleBox}>
            <MiddleMap></MiddleMap>
          </div>
          <div className={detailStyles.rightBox}>
            <RightSide></RightSide>
          </div>
        </div>
        <div className={detailStyles.btmBox}>
          <Trading></Trading>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
