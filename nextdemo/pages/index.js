import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Publictop from "../components/Publictop";
import Homelist from "../components/Homelist";
import { data } from "./api/data";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.publicHead}>
        <Publictop />
      </div>
      <div className={styles.mainbox}>
        {/* ========Lfet area======== */}
        <div className={styles.leftFirst}>
          <h1 className={styles.title}>CryptoCoinExchange</h1>
          <div>
            <h2 className={styles.introduce}>
              CryotoCoin是一个虚拟货币交易所,为用户提供虚拟货币交易。
            </h2>
            <p className={styles.intorducetxt}>
              CryptoCoin是新加坡的一家世界知名加密火币交易中心
              Crypto全球拥有500W加密爱好者在此交易加密货币。
            </p>
            <p>Crypto is future</p>
            <Link href="/detail">
              <button className={styles.exchangebtn}>Exchange</button>
            </Link>
            <p className={styles.othertxt}>
              By the way: <br />
              <span>
                The is React and Next.js Novice practice website
                <br />
                Click "CryptoCoinExchange" return home page
              </span>
              <br />
              <span>
                这是一个新手练习React和Next.js的网站
                <br />
                点击"CryptoCoinExchange返回主页"
              </span>
            </p>
          </div>
        </div>
        {/* ============Right area========== */}
        <div className={styles.rightSecond}>
          <Homelist data={dataList} />
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          看文档,看B站,一边踩坑一边照着写。
          <br />
          Author:BayMax
        </p>
      </div>
    </div>
  );
}

//获取数据
// export const getStatesProps = async () => {
//   const dataList = data;
//   return {
//     props: { dataList },
//   };
// };
const dataList = data;
