import styles from "../../styles/Home.module.css";
import Link from "next/link";


export function Shows() {
    var date = new Date(); 
    var today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    var yesterday = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)-86400000).toISOString().split('T')[0];
    var tomorrow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)+86400000).toISOString().split('T')[0];
    var query = [{"date":yesterday,"id":"Ontem" }, {"date":today,"id":"Hoje" }, {"date":tomorrow,"id":"Amanhã" }]
    return (
      <div className={styles.container}>

        <h1>EPG</h1>    
        {query.map((query_id) => (
            <li>
              <Link href={`/day/${query_id.date}`}>
                <a>
                {`${query_id.date.split('-',3).reverse()}`.split(',',2).join().replace(',','-')}
                {query_id.id}
                </a>
              </Link>
            </li>
        ))}
      </div>
    );
  }
    