import React from 'react';
import { useState, useEffect, useContext } from 'react';

import Head from "next/head";
import styles from "../../styles/Home.module.css";
import moment from 'moment'

export default function Home( {tvShowsList}) {

  const now = moment().unix();


    return (
    <div className={styles.container}>
    <Head>
      <title>RPC</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>EPG</h1>
    
    {tvShowsList.map((dia) => (
      
    <div>
      <h1>EPG3</h1>
     

      {dia.map((show) => (
       

        <div key={show.midia_id}>
          {<h1>{now}</h1>}
         {(show.start_time < now) && (show.end_time > now) ? <h1>{show.end_time}</h1>:<h1>nao</h1>}  
          <p>Título{show.title}</p>
          <p>Título{show.start_time}</p>
          <p>Título{show.end_time}</p>
          <p>Descrição {show.description}</p>
          <p>Duração em minutos {show.duration_in_minutes}</p>
          <img src={show.custom_info.Graficos.PosterURL}/>
        </div>
      ))}
    </div>
    ))}
    
  
  </div>
  );
}



export async function getStaticProps({ params }) {

  const date1 = params.query_id
  const timestampStart = new Date(date1).valueOf()/1000;
  console.log(timestampStart-1614297599)
  console.log(timestampStart-1614222000)
  const timestampEnd = timestampStart+86399
  console.log(timestampStart)
  console.log(timestampEnd)

  const date = new Date(); 
  const today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
  const yesterday = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)-86400000).toISOString().split('T')[0];
  const tomorrow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)+86400000).toISOString().split('T')[0];
  //console.log(`${today}`)
  const res = await fetch(`https://epg-api.video.globo.com/programmes/1337/?date=${yesterday}`);
  const res2 = await fetch(`https://epg-api.video.globo.com/programmes/1337/?date=${today}`);
  const res3 = await fetch(`https://epg-api.video.globo.com/programmes/1337/?date=${tomorrow}`);
  const guide = await res.json();
  const guide2 = await res2.json();
  const guide3 = await res3.json();
  //console.log({guide3})
  const teste = guide.programme.entries.sort(function (a,b) {
    return a.start_time-b.start_time
  })
  const teste2 = guide2.programme.entries.sort(function (a,b) {
    return a.start_time-b.start_time
  })
  const teste3 = guide3.programme.entries.sort(function (a,b) {
    return a.start_time-b.start_time
  })

  const filter = [teste, teste2, teste3]
  const filterByDate = []

  {filter.map((filtered) => {
    {filtered.map((time) => {
      if (time.start_time > timestampStart+10800 && time.end_time < timestampEnd+10800){
        filterByDate.push([time])
        console.log(time.start_time)

      }
    })
    }
  })}
  
  //console.log([teste,teste2,teste3])
  const orderByDate = filterByDate.sort(function (a,b) {
    return a.start_time-b.start_time
  })


  return {
    props: {
      tvShowsList: filterByDate
    }
  };
}

export async function getStaticPaths() {
  const date = new Date(); 
  const today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
  const yesterday = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)-86400000).toISOString().split('T')[0];
  const tomorrow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)+86400000).toISOString().split('T')[0];
  const query = [{"day": today}, {"day": yesterday}, {"day": tomorrow}]
  return {
    paths: query.map((query_id)=> ({
      params: {
        query_id: query_id.day,
      }
    })),
  fallback:false,
}
}


