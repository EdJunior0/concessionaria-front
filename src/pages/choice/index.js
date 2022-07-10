import Head from "next/head";
import ChoiceComponent from "../../components/Choice";

export default function Choice() {
  return (
    <div className="container">
      <Head>
        <title>Choice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <ChoiceComponent />
      </>
    </div>
  );
}
