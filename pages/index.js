import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Shows } from './components/Shows';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RPC</title>
        <link rel="icon" href="/fav.ico" />
      </Head>

      
      <Shows></Shows>
 
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src="icons/rpc.png" alt="logo rpc"/>
        </div>
      </div>
    </div>
  );
}
  
  