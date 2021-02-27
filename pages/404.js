// 404.js
import styles from "../styles/components/Error.module.css";
import Shows from './components/Shows';

export default function FourOhFour() {
  return (
    <div className={styles.container}>
    
    <Shows></Shows>

    <div className={styles.error}>
      <h1>404 - Programação não encontrada</h1>
      <img src="/icons/travolta.gif" alt="lost"  className={styles.gif}/>
    </div>
    </div>
  )
}