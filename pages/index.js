import Head from "next/head";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["header_icons"]}>
        <div className={styles["header_icons_logo"]}>
          <Image
            src={require("../public/personality-logo.jpg")}
            width={50}
            height={50}
          />
          <h3 className={styles["header_icons_title"]}>Personality</h3>
        </div>
      </div>
    </div>
  );
}
