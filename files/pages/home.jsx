import styles from '../styles/home.module.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>Hello! I'm Julia Bauer.</h1>
        <h2 className={styles.heading2}>Lorem ipsum dolor sit amet consectetur.</h2>
        <br />
        <br />
      </div>

      <div className={`${styles.homeParagraph} ${styles.aboutHome}`}>
        <br />
        <br />
        <h2 className={styles.homeAboutP}>About me</h2>
        <br />
        <p className={styles.homeAboutP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam sunt, nostrum inventore corrupti facere asperiores veritatis maxime earum animi, est magnam sint, voluptatum expedita labore voluptate consequuntur nisi rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos recusandae eveniet distinctio enim ipsam quia dolore at architecto esse.</p>
        <br />
        <br />
        <Link to="/about">
          <button className={styles.buttons}>Read more</button>
        </Link>
      </div>

      <div className={styles.workBack}>
        <h2 className={styles.workTitle}>My work</h2>
        <br />
        <div className={`${styles.workHome} ${styles.wordCards}`}>
          <div className={styles.workItem}>
            <Link to="/journalism">
            <img src="jou.png" alt="Image 1" />
            </Link>
          </div>
          <div className={styles.workItem}>
            <Link to="/design">
            <img src="design.png" alt="Image 2" />
            </Link>
          </div>
          <div className={styles.workItem}>
            <Link to="/coding">
            <img src="dev.png" alt="Image 3" />
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className={styles.homeParagraph}>
          <Link to="/fun">
            <button className={styles.buttons}>Other fun stuff &rarr;</button>
          </Link>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className={`${styles.homeParagraph} ${styles.contactHome}`}>
        <br />
        <br />
        <h2 className={styles.homeAboutP}>Contact</h2>
      </div>
    </main>
  );
}