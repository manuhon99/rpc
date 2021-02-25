import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Home({ tvShowsList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>RPC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/states">
        <a>Check show</a>
      </Link>
      <h1>EPG</h1>
      
      {tvShowsList.map((show) => (
        <div key={show.midia_id}>
          <p>{show.title}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps( ) {
  var date = new Date(); 
  var today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
  var yesterday = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)-86400000).toISOString();
  var tomorrow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)+86400000).toISOString();
  var query = [today, yesterday, tomorrow]
  const query_id = query.map((query_id)=>{
  console.log(query_id)
  })
  
  const res = await fetch(`https://epg-api.video.globo.com/programmes/1337/?day=${query_id}`);
  const guide = await res.json();
  //console.log(guide.programme.entries.slice(0, 10))

  return {
    props: {
      tvShowsList: guide.programme.entries
    }
  };
}
