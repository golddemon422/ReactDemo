import rightsideStyle from "../styles/RightDetailside.module.css"
import Search from "./Search"
function RightDetailside() {
    const listTab = [
        {
            ID: "1",
            name: "主板区"
        },
        {
            ID: "2",
            name: "创新区"
        },
        {
            ID: "3",
            name: "MEME区"
        },
        {
            ID: "4",
            name: "Defi区"
        },
        {
            ID: "5",
            name: "公链区"
        },
        {
            ID: "6",
            name: "GameFi区"
        },
    ]
    return (
        <div className={rightsideStyle.container}>
            <Search></Search>
            <ul className={rightsideStyle.listBox}>
                {
                    listTab.map((item) => {
                        console.log(item)
                        return (
                            <li key={item.ID}>{item.name}</li>
                        )
                    })
                }
            </ul>
            <div className={rightsideStyle.coinTrad}>
                <div className={rightsideStyle.CoinList}>
                    通证列表
                </div>
                <div className={rightsideStyle.subtitle}>最新成交</div>
                <div className={rightsideStyle.Trading}>
                    最新成交列表
                </div>
            </div>
        </div>
    )
}

export default RightDetailside