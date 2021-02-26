import Link from "next/link";
import styles from '../../styles/components/Shows.module.css';

export function Shows() {
    var date = new Date(); 
    var today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    var yesterday = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)-86400000).toISOString().split('T')[0];
    var tomorrow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)+86400000).toISOString().split('T')[0];
    var query = [{"date":yesterday,"id":"Ontem" }, {"date":today,"id":"Hoje" }, {"date":tomorrow,"id":"Amanhã" }]
    return (
      <div className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.navMenu}>
            <Link href={`/`}>
            <a><img src="/icons/globo.png" className={styles.logo} style={{maxWidth:"48px"}} alt="logo globo"/></a>
            </Link>
            <ul className={styles.navList}>
              <div className={styles.home}>
                <li><Link href={`/`}>Home</Link></li>
              </div>
              <div className={styles.name}>
              <li>PROGRAMAÇÃO DA RPC</li>  
              </div>
            </ul>
          </div>
        </div>
        <ul className={styles.userOption}>
        {query.map((query_id) => (
          <button className={styles.button}>
            <Link href={`/day/${query_id.date}`}>
              <a>
              {query_id.id}
              <br/>
              {`${query_id.date.split('-',3).reverse()}`.split(',',2).join().replace(',','-')}
              </a>
            </Link>
            </button>
        
        ))}
        </ul> 
      </div>
    );
  }

export default Shows;
    