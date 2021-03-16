import styles from '../../styles/components/Navbar.module.css';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.main}> 
        <img src="/icons/logo.svg" className={styles.img} alt="logo venturus"/>
        <span>Squad Management Tool</span>
      </div>
      <div className={styles.user}> 
        <p>John Doe</p>
        <img src="/icons/user.svg" className={styles.img2} alt="user"/>
      </div>
    </div>
  );
}

export default Navbar;