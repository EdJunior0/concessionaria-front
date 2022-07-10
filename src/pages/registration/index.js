import Head from "next/head";
import RegistrationComponent from "../../components/Registration";

export default function Registration() {
  return (
    <div className="container">
      <Head>
        <title>Cadastro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <RegistrationComponent />
      </>
    </div>
  );
}
