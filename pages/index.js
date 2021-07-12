import Head from "next/head";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
const Description = dynamic(() => import("../src/Components/Description"));
export default function Home() {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>Personality Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Description />
    </div>
  );
}
