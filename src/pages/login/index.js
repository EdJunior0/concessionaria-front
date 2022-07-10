import Head from "next/head";
import LoginComponent from "../../components/Login";

export default function Login() {
  return (
    <div className="container">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <LoginComponent />
      </>
    </div>
  );
}
