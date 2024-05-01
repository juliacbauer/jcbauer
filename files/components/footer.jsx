import styles from '../styles/home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>JCB 2024 &copy;</p>
            <p className={styles.footerCred}>Powered by Vercel</p>
        </footer>
    )
}