import React from 'react';
import { useRouter } from 'next/router'
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Home( {tvShowsList} ) {
  return (
    <div className={styles.container}>
    <Head>
      <title>RPC</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>EPG</h1>
    
    {tvShowsList.map((show) => (
      <div key={show.midia_id}>
        <p>{show.title}</p>
      </div>
    ))}
  </div>
  );
}

export async function getStaticProps({ params }) {
    console.log({params})
    const res = await fetch(`https://epg-api.video.globo.com/programmes/1337/?day=${params}`);
    const guide = await res.json();
    //console.log(guide.programme.entries.slice(0, 10))
  
    return {
      props: {
        tvShowsList: guide.programme.entries
      }
    };
}

export async function getStaticPaths() {
    var date = new Date(); 
    var today = "2021-02-24"
    var yesterday = "2021-02-25"
    var tomorrow = "2021-02-26"
    var query = [{"day": today}, {"day": yesterday}, {"day": tomorrow}]
    return {
      paths: query.map((query_id)=> ({
        params: {
          query_id: query_id.day.toString(),
        }
      })),
    fallback:false,
}
}

