import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Shows } from './components/Shows';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Programação RPC</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/fav.ico" />
      </Head>

      
      <Shows></Shows>
 
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src="icons/rpc.png"  style={{maxWidth:"220px"}} alt="logo rpc"/>
        </div>
      </div>
    </div>
  );
}
  
  