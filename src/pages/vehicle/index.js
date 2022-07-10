import Head from "next/head";
import VehicleComponent from "../../components/Vehicle";

export default function Vehicle() {
  return (
    <div className="container">
      <Head>
        <title>Vehicle</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <>
        <VehicleComponent />
      </>
    </div>
  );
}
