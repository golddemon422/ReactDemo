import rightsideStyle from "../styles/RightDetailside.module.css"
import React, { useState, useEffect } from "react";//基础HOOK
const Search = (props) => {
  //Change事件
  const [SearchVal, setSearchVal] = useState("");
  const SearchBtn = (events) => {
    console.log(events.target.value, "abc");
  };

  return (
    <div className={rightsideStyle.context}>
      <input
        className={rightsideStyle.putbox}
        placeholder="请输入搜索内容"
        onChange={SearchBtn.bind()}
      />
    </div>
  );
};

export default Search;
