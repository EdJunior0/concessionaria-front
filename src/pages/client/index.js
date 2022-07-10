import Head from "next/head";
import ClientComponent from "../../components/Client";

export default function Client() {
  return (
    <div className="container">
      <Head>
        <title>Client</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <>
        <ClientComponent />
      </>
    </div>
  );
}
