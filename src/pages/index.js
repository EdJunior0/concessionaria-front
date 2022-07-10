import Head from "next/head";
import HomeComponent from "../components/Home";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Concessionaria - PAGME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <HomeComponent />
      </>
    </div>
  );
}
