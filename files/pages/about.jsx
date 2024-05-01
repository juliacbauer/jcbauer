import styles from '../styles/home.module.css'
import me from '/public/me.jpg'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.homeParagraph}>
        <h1>About Me</h1>
        <img src={me} alt="Me" width="600" height="auto" className={styles.meImg} />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, perferendis nulla atque nihil magni, omnis quas sit alias labore natus error maiores quos, tenetur modi delectus necessitatibus possimus quam quidem.</p>
        <h2>Experience</h2>
        <h2>Education</h2>
        <h2>Contact Info</h2>
      </div>
    </main>
  )
}