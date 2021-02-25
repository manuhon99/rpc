import React from 'react';
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
        <p>Título{show.title}</p>
        <p>Descrição {show.description}</p>
        <p>Duração em minutos {show.duration_in_minutes}</p>
        <img src={show.custom_info.Graficos.PosterURL}/>
      </div>
    ))}
  </div>
  );
}

export async function getStaticProps({ params }) {
    //console.log(`${params.query_id}`)
    const res = await fetch(`https://epg-api.video.globo.com/programmes/1337/?date=${params.query_id}`);
    const guide = await res.json();
    const teste = guide.programme.entries.sort(function (a,b) {
      return a.start_time-b.start_time
    })
    //console.log(teste)
  
    return {
      props: {
        tvShowsList: teste
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
          query_id: query_id.day,
        }
      })),
    fallback:false,
}
}

