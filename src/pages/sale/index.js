import Head from "next/head";
import SaleComponent from "../../components/Sale";

export default function Sale() {
  return (
    <div className="container">
      <Head>
        <title>Venda</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <>
        <SaleComponent />
      </>
    </div>
  );
}
