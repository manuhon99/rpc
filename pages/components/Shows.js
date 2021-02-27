import Link from "next/link";
import styles from '../../styles/components/Shows.module.css';

//Função que exibe o componente de navegação, com 3 botões para o usuário escolher o dia que deseja 
//visualizar a programação
export function Shows() {
  //objeto Date para setar as datas de ontem, hoje e amanhã no formato ANO-MÊS-DIA
  const date = new Date(); 
  const today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
  const yesterday = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)-86400000).toISOString().split('T')[0];
  const tomorrow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)+86400000).toISOString().split('T')[0];
  const query = [{"date":yesterday,"id":"Ontem" }, {"date":today,"id":"Hoje" }, {"date":tomorrow,"id":"Amanhã" }]
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
      {/* Map para percorrer o array com as 3 opções de datas */}
      {query.map((query_id, i) => (
        <Link href={`/day/${query_id.date}`}>
        <button className={styles.button} key={i}>
          
            <a>
              {query_id.id}
              <br/>
              {/* Data no formato DIA-MÊS */}
              {`${query_id.date.split('-',3).reverse()}`.split(',',2).join().replace(',','-')}
            </a>
          
        </button>
        </Link>
      ))}
      </ul> 
    </div>
  );
}

export default Shows;
    