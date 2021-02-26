import Link from "next/link";
import styles from '../../styles/components/Shows.module.css';

export function Shows() {
    var date = new Date(); 
    var today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    var yesterday = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)-86400000).toISOString().split('T')[0];
    var tomorrow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)+86400000).toISOString().split('T')[0];
    var query = [{"date":yesterday,"id":"Ontem" }, {"date":today,"id":"Hoje" }, {"date":tomorrow,"id":"Amanhã" }]
    return (
      <div className={styles.showContainer}>
         <div className={styles.navbar}>
            <img src="icons/globo.png" alt="logo rpc"/>
            <h1>PROGRAMAÇÃO DA RPC</h1>  
        </div>  
        {query.map((query_id) => (
            <ul>
            <button className={styles.button}>
              <Link href={`/day/${query_id.date}`}>
                <a>
                {query_id.id}
                <br/>
                {`${query_id.date.split('-',3).reverse()}`.split(',',2).join().replace(',','-')}
                </a>
              </Link>
              </button>
            </ul>
        ))}
      </div>
    );
  }
    