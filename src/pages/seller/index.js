import Head from "next/head";
import SellerComponent from "../../components/Seller";

export default function Seller() {
  return (
    <div className="container">
      <Head>
        <title>Seller</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <>
        <SellerComponent />
      </>
    </div>
  );
}
