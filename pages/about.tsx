import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>pms front-end</title>
        <meta name="keywords" content="web" />
      </Head>
      <Header />
    </div>
  );
};

export default Index;
