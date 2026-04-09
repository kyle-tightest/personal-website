import styles from '../page.module.css';

export default function Blog() {
    return (
        <div className={styles.container}>
            <section id="blog" className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className="glow-lemon">---</span>
                    <h2 className="glow-text">ls -l /var/blog</h2>
                </div>
                <ul className={styles.fileList}>
                    <li>{`-rw-r--r--   1 kyle  staff   4096 Apr  9 19:20 `}<span className={styles.fileName}>how_to_grow_organic_apis.md</span></li>
                    <li>{`-rw-r--r--   1 kyle  staff   2048 Apr  9 21:58 `}<span className={styles.fileName}>terraform_for_farmers.md</span></li>
                    <li>{`-rw-r--r--   1 kyle  staff      0 Jan  1  1970 `}<span className={styles.fileName}>coming_soon.md</span></li>
                </ul>
            </section>
        </div>
    );
}
