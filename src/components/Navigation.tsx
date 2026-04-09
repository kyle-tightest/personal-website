'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
    const pathname = usePathname();

    const links = [
        { name: 'home', path: '/' },
        { name: 'services', path: '/services' },
        { name: 'resume', path: '/resume' },
        { name: 'blog', path: '/blog' },
        { name: 'games', path: '/games' },
    ];

    return (
        <nav className={styles.nav}>
            {links.map((link) => (
                <div key={link.name} className={styles.navItem}>
                    <span className="glow-lemon">organic-code-farm ~$</span>
                    <Link href={link.path} className={pathname === link.path ? styles.active : ''}>
                        ./{link.name}
                    </Link>
                </div>
            ))}
        </nav>
    );
}
