import Head from "next/head";
// ES5函数写法
// export default function Header(props) {
//   return (
//     <div>
//       <Head>
//         <title>NextDemo首页1</title>
//         <meta charSet="utf-8" name="description" content="exercise Next"/>
//       </Head>
//     </div>
//   );
// }

// ES6写法
const Header = (props) => {
  return (
    <div>
      <Head>
        <title>{props.titlle}CryptoCoin交易所</title>
        <meta charSet="utf-8" name="description" content="exercise Next" />
      </Head>
    </div>
  );
};

export default Header;
