import leftsideStyle from "../styles/LeftSide.module.css"
import TradingData from "../pages/api/TradingData"
import Router from "next/router"; //编程式跳转必须引入
function LeftSide() {
    const CoinName = Router.query.name;
    const CoinPrice = Router.query.price;
    const DollarPrice = parseFloat(CoinPrice) / 6.35 * 1000;
    const ShowDollar = DollarPrice.toFixed(2);
    return (
        <div className={leftsideStyle.ContentBox}>
            <div className={leftsideStyle.TopBox}>
                <div className={leftsideStyle.OrderTitle}>委托订单</div>
                <div className={leftsideStyle.ShowpriceBox}>
                    <div className={leftsideStyle.showPrice}>
                        <div className={leftsideStyle.Volprice}>价格(USDT)</div>
                        <div className={leftsideStyle.CoinNum}>数量&nbsp;[{CoinName}]</div>
                        <div className={leftsideStyle.Uprice}>金额(USDT)</div>
                    </div>
                    <ul className={leftsideStyle.SellOrderList}>
                        {TrData.map(item => {
                            return (
                                <li key={item.Id}>
                                    <div className={leftsideStyle.Lprice}>{item.Vprice}</div>
                                    <div className={leftsideStyle.vol}>{item.Vol}</div>
                                    <div className={leftsideStyle.money}>{item.Price}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={leftsideStyle.BtmBox}>
                <div className={leftsideStyle.PriceTitle}>{CoinPrice}
                    <span className={leftsideStyle.dollar}>≈${ShowDollar}</span></div>
                <ul className={leftsideStyle.BuyOrderList}>
                    {
                        TrData.map(item => {
                            return (
                                <li key={item.Id}>
                                    <div className={leftsideStyle.Rprice}>{item.Vprice}</div>
                                    <div className={leftsideStyle.vol}>{item.Vol}</div>
                                    <div className={leftsideStyle.money}>{item.Price}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default LeftSide

const TrData = TradingData;