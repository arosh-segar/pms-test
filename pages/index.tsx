import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>pms front-end</title>
        <meta name="keywords" content="web" />
      </Head>
      <h1 className="font-bold">Hello</h1>
    </div>
  );
};

export default Home;
