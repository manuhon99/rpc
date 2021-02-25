import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Shows } from './components/Shows';


export default function Home() {
  var date = new Date(); 
  var today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];;
  var yesterday = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)-86400000).toISOString().split('T')[0];;
  var tomorrow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)+86400000).toISOString().split('T')[0];;
  var query = [today, yesterday, tomorrow]
  return (
    <div className={styles.container}>
      <Head>
        <title>RPC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/states">
        <a>Check show</a>
      </Link>
      <Shows></Shows>
    </div>
  );
}
  
  