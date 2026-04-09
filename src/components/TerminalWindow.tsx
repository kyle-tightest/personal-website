import styles from './TerminalWindow.module.css';

export default function TerminalWindow({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
                <div className={styles.buttons}>
                    <div className={`${styles.button} ${styles.close}`}></div>
                    <div className={`${styles.button} ${styles.minimize}`}></div>
                    <div className={`${styles.button} ${styles.maximize}`}></div>
                </div>
                <div className={styles.title}>user@organic-code-farm:~</div>
            </div>
            <div className={styles.terminalBody}>
                {children}
            </div>
            <div className={styles.scanline}></div>
        </div>
    );
}
