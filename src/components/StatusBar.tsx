import styles from './StatusBar.module.css';

export default function StatusBar() {
    return (
        <div className={styles.statusBar}>
            <div className={styles.left}>
                <span className={styles.mode}>NORMAL</span>
                <span className={styles.file}>/dev/kyletitus/system</span>
            </div>
            <div className={styles.right}>
                <a href="https://github.com/kyle-tightest" target="_blank" rel="noreferrer">GitHub</a>
                <span>|</span>
                <a href="https://www.linkedin.com/in/kyle-mj-titus/" target="_blank" rel="noreferrer">LinkedIn</a>
                <span>|</span>
                <span>SYS.UPTIME: 99.99%</span>
                <span>|</span>
                <span style={{ fontSize: '0.7rem', opacity: 0.7, fontWeight: 'normal' }}>
                    *Grown organically by AI*
                </span>
            </div>
        </div>
    );
}
