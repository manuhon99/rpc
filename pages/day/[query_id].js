import React from 'react';
import {Shows} from '../components/Shows';
import Head from "next/head";
import moment from 'moment';
import styles from "../../styles/components/Content.module.css";

export default function Teste( {tvShowsList}) {
  const now = moment().unix();
    return (
      <div className={styles.container}>
        <Head>
          <title>Programação RPC</title>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <link rel="icon" href="/fav.ico" />
        </Head>
        
        <Shows></Shows>
        <section className={styles.data}>
          {tvShowsList.map((dia) => (
          <div className={styles.containerContent}>
            {dia.map((show) => (        
              <div key={show.midia_id}>
                <section className={styles.dataInfo}>
                <div className={styles.containerHour}>
                  <p>{new Date(parseInt(show.start_time-86400, 10)*1000).toLocaleString('pt-br',{hour:'2-digit', minute:'2-digit'})}</p>
                  <p>{new Date(parseInt(show.end_time-86400, 10)*1000).toLocaleString('pt-br',{hour:'2-digit', minute:'2-digit'})}</p>
                </div>  

                <div className={styles.containerDescription}>
                  <img src={show.custom_info.Graficos.LogoURL} className={styles.image} style={{maxWidth: "36px"}}/>
                  <p className={styles.title}>{show.title}</p>
                  <p className={styles.description}>{show.description}</p>
                  <p className={styles.classi}>Classificação Indicativa: {show.custom_info.Classificacao.Idade}</p>
                  <p className={styles.year}>Ano: {show.custom_info.Ano}</p>

                  <div className={styles.containerNow}>
                  {(show.start_time < now) && (show.end_time > now) ?  
                  <div className={styles.isShowing}>
                    <img src={show.custom_info.Graficos.PosterURL}/>
                    <p style={{color: "var(--blue-logo)", marginTop:"-.5rem"}} >NO AR</p>
                    <p style={{color: "var(--blue-logo)", marginBottom:".5rem"}} >Duração total: {show.duration_in_minutes}min</p>
                  </div>
                  :
                  <div></div>
                }
                </div>  
                </div>

                </section>
              </div> 
              
              
              
            ))}
          </div>
          ))}


          
          </section>
        </div>
    );
}

export async function getStaticProps({ params }) {

  const date1 = params.query_id
  const timestampStart = new Date(date1).valueOf()/1000;
  //console.log(timestampStart-1614297599)
  //console.log(timestampStart-1614222000)
  const timestampEnd = timestampStart+86399
  //console.log(timestampStart)
  //console.log(timestampEnd)

  const date = new Date(); 
  const today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
  const yesterday = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)-86400000).toISOString().split('T')[0];
  const beforeYesterday = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)-86400000*2).toISOString().split('T')[0];
  const tomorrow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)+86400000).toISOString().split('T')[0];
  const afterTomorrow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)+86400000*2).toISOString().split('T')[0];
  
  const res = await fetch(`https://epg-api.video.globo.com/programmes/1337/?date=${yesterday}`);
  const res2 = await fetch(`https://epg-api.video.globo.com/programmes/1337/?date=${today}`);
  const res3 = await fetch(`https://epg-api.video.globo.com/programmes/1337/?date=${tomorrow}`);
  const res4 = await fetch(`https://epg-api.video.globo.com/programmes/1337/?date=${beforeYesterday}`);
  const res5 = await fetch(`https://epg-api.video.globo.com/programmes/1337/?date=${afterTomorrow}`);

  const guide = await res.json();
  const guide2 = await res2.json();
  const guide3 = await res3.json()
  const guide4 = await res4.json();
  const guide5 = await res5.json();

  const teste = guide.programme.entries.sort(function (a,b) {
    return a.start_time-b.start_time
  })
  const teste2 = guide2.programme.entries.sort(function (a,b) {
    return a.start_time-b.start_time
  })

  const teste3 = guide3.programme.entries.sort(function (a,b) {
    return a.start_time-b.start_time
  })
  const teste4 = guide4.programme.entries.sort(function (a,b) {
    return a.start_time-b.start_time
  })
  
  const teste5 = guide5.programme.entries.sort(function (a,b) {
    return a.start_time-b.start_time
  })

  const filter = [teste4, teste, teste2, teste3, teste5]
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


