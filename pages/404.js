// 404.js
import styles from "../styles/components/Error.module.css";

export default function FourOhFour() {
  return (
    <div className={styles.container}>
    

    <div className={styles.error}>
      <h1>404 - Programação não encontrada</h1>
      <img src="/icons/travolta.gif" alt="lost"  className={styles.gif}/>
    </div>
    </div>
  )
}