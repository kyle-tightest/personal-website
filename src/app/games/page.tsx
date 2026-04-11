'use client';
import { useState } from 'react';
import styles from '../page.module.css';
import HarvestMemory from '@/components/games/HarvestMemory';
import RaindropRhythms from '@/components/games/RaindropRhythms';

type Tab = 'harvest' | 'raindrops';

export default function Games() {
    const [activeTab, setActiveTab] = useState<Tab>('harvest');

    return (
        <div className={styles.container}>
            <section id="games" className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className="glow-lemon">---</span>
                    <h2 className="glow-text">Arcade Garden</h2>
                </div>

                <div className={styles.tabSelector}>
                    <button 
                        className={`${styles.tabButton} ${activeTab === 'harvest' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('harvest')}
                    >
                        🌱 Harvest Memory
                    </button>
                    <button 
                        className={`${styles.tabButton} ${activeTab === 'raindrops' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('raindrops')}
                    >
                        💧 Raindrop Rhythms
                    </button>
                </div>

                <div className={styles.gameWrapper}>
                    {activeTab === 'harvest' ? (
                        <HarvestMemory />
                    ) : (
                        <RaindropRhythms />
                    )}
                </div>
            </section>
        </div>
    );
}
