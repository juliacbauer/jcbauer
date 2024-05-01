import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.leftAlign} ${styles.bob}`}>
                <Link to="/">
                    <img src={'../public/logo4.png'} alt="Logo"
                        style={{ width: '80px', height: 'auto' }} />
                </Link>
            </div>
            <div className={styles.rightAlign}>
                <div className={styles.workLink}>
                    <Link to="#">Work</Link>
                    <div className={styles.workLinksContent}>
                        <Link to="/journalism">Journalism</Link>
                        <Link to="/design">Design</Link>
                        <Link to="/coding">Coding</Link>
                        <Link to="/fun">Just for Fun</Link>
                    </div>
                </div>

                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    );
}