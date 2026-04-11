'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './RaindropRhythms.module.css';

interface Drop {
    id: number;
    col: number;
    y: number;
}

interface Ripple {
    id: number;
    col: number;
}

const KEYS = ['a', 's', 'd', 'f'];
const COLS = 4;
const DROP_SPEED = 3.5; // Pixels per frame at 60fps
const HIT_ZONE_Y = 340; // Where the bowls are
const HIT_WINDOW = 35;  // Tolerance for a hit

export default function RaindropRhythms() {
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [drops, setDrops] = useState<Drop[]>([]);
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const [activeKeys, setActiveKeys] = useState<boolean[]>([false, false, false, false]);
    const [hitFlash, setHitFlash] = useState<boolean[]>([false, false, false, false]);

    const requestRef = useRef<number>(undefined);
    const lastTimeRef = useRef<number>(undefined);
    const dropIdRef = useRef(0);
    const lastDropTimeRef = useRef(0);

    const spawnDrop = useCallback(() => {
        const col = Math.floor(Math.random() * COLS);
        const newDrop: Drop = {
            id: ++dropIdRef.current,
            col,
            y: -50
        };
        setDrops(prev => [...prev, newDrop]);
    }, []);

    const handleHit = useCallback((colIndex: number) => {
        setDrops(prev => {
            const dropIndex = prev.findIndex(d => d.col === colIndex && Math.abs(d.y - HIT_ZONE_Y) < HIT_WINDOW);
            
            if (dropIndex !== -1) {
                // IT'S A HIT!
                setScore(s => s + 10);
                setRipples(r => [...r, { id: Date.now(), col: colIndex }]);
                setHitFlash(prev => {
                    const next = [...prev];
                    next[colIndex] = true;
                    return next;
                });
                setTimeout(() => {
                    setHitFlash(prev => {
                        const next = [...prev];
                        next[colIndex] = false;
                        return next;
                    });
                }, 100);

                // Remove the hit drop
                const nextDrops = [...prev];
                nextDrops.splice(dropIndex, 1);
                return nextDrops;
            }
            return prev;
        });
    }, []);

    // Game loop
    const animate = useCallback((time: number) => {
        if (lastTimeRef.current !== undefined) {
            // Spawn logic
            if (time - lastDropTimeRef.current > 1000) { // Every 1s
                spawnDrop();
                lastDropTimeRef.current = time;
            }

            // Move drops
            setDrops(prev => {
                return prev
                    .map(d => ({ ...d, y: d.y + DROP_SPEED }))
                    .filter(d => d.y < 450); // Remove off-screen drops
            });
        }
        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }, [spawnDrop]);

    useEffect(() => {
        if (isPlaying) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            setDrops([]);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isPlaying, animate]);

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const index = KEYS.indexOf(e.key.toLowerCase());
            if (index !== -1 && isPlaying) {
                setActiveKeys(prev => {
                    const next = [...prev];
                    if (!next[index]) {
                        next[index] = true;
                        handleHit(index);
                    }
                    return next;
                });
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            const index = KEYS.indexOf(e.key.toLowerCase());
            if (index !== -1) {
                setActiveKeys(prev => {
                    const next = [...prev];
                    next[index] = false;
                    return next;
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [isPlaying, handleHit]);

    // Clean up ripples
    useEffect(() => {
        if (ripples.length > 0) {
            const timer = setTimeout(() => {
                setRipples(prev => prev.slice(1));
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [ripples]);

    return (
        <div className={styles.gameContainer}>
            <div className={styles.stats}>
                <div className={styles.score}>Resonance: {score}</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Catch the raindrops in the singing bowls.
                </p>
            </div>

            <div className={styles.stage}>
                <div className={styles.columns}>
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} className={styles.column}>
                            {ripples.filter(r => r.col === i).map(r => (
                                <div key={r.id} className={styles.ripple} />
                            ))}
                        </div>
                    ))}
                </div>

                {drops.map(drop => (
                    <div 
                        key={drop.id} 
                        className={styles.drop}
                        style={{ top: drop.y, left: `${(drop.col * 25) + 12.5}%` }}
                    >
                        💧
                    </div>
                ))}

                <div className={styles.bowls}>
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} className={styles.bowlContainer}>
                            <div 
                                className={`${styles.bowl} ${activeKeys[i] ? styles.active : ''} ${hitFlash[i] ? styles.hit : ''}`}
                                onMouseDown={() => {
                                    if (isPlaying) {
                                        setActiveKeys(prev => {
                                            const next = [...prev];
                                            next[i] = true;
                                            return next;
                                        });
                                        handleHit(i);
                                    }
                                }}
                                onMouseUp={() => {
                                    setActiveKeys(prev => {
                                        const next = [...prev];
                                        next[i] = false;
                                        return next;
                                    });
                                }}
                            >
                                <span className={styles.keyHint}>{KEYS[i].toUpperCase()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.controls}>
                <button 
                    className={styles.btn} 
                    onClick={() => {
                        setIsPlaying(!isPlaying);
                        if (!isPlaying) setScore(0);
                    }}
                >
                    {isPlaying ? 'Pause Meditation' : 'Start Meditation'}
                </button>
            </div>
        </div>
    );
}
