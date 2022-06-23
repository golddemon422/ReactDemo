import TradStyle from "../styles/Trading.module.css"
function Trading() {
    return (
        <div className={TradStyle.container}>
            <div className={TradStyle.buyBox}>
                购买/登陆
            </div>
            <div className={TradStyle.sellBox}>
                卖出/登录
            </div>
        </div>
    )
}

export default Trading;