import styles from '../styles/home.module.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>Hello! I'm Julia Bauer.</h1>
        <h2 className={styles.heading2}>I'm a writer, designer and storyteller.</h2>
        <p className={styles.herop}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam suscipit et nemo adipisci distinctio impedit soluta nulla, amet assumenda perferendis aliquid repudiandae facilis, placeat eveniet saepe laboriosam temporibus quas voluptas.</p>
        <br />
        <br />
      </div>

      <div className={`${styles.homeParagraph} ${styles.aboutHome}`}>
        <br />
        <h2>About me!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam sunt, nostrum inventore corrupti facere asperiores veritatis maxime earum animi, est magnam sint, voluptatum expedita labore voluptate consequuntur nisi rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos recusandae eveniet distinctio enim ipsam quia dolore at architecto esse.</p>
        <br />
        <Link to="/about">
          <button className={styles.buttons}>Read more</button>
        </Link>
      </div>

      <div className={styles.workBack}>
        <h2 className={styles.workTitle}>My work!</h2>
        <br />
        <br />
        <div className={`${styles.workHome} ${styles.wordCards}`}>
          <div className={styles.workItem}>
            <img src="image1.png" alt="Image 1" />
            <br />
            <br />
            <Link to="/journalism">
              <button className={styles.buttons}>Publications</button>
            </Link>
          </div>
          <div className={styles.workItem}>
            <img src="image2.png" alt="Image 2" />
            <br />
            <br />
            <Link to="/design">
              <button className={styles.buttons}>Adobe Work</button>
            </Link>
          </div>
          <div className={styles.workItem}>
            <img src="image3.png" alt="Image 3" />
            <br />
            <br />
            <Link to="/coding">
              <button className={styles.buttons}>Projects</button>
            </Link>
          </div>
        </div>
        <br />
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
        <h2>Contact buttons!</h2>
      </div>
    </main>
  );
}