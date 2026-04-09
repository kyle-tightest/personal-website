'use client';
import { useState, useEffect } from 'react';
import styles from '../page.module.css';

const EMOJIS = ['🍅', '🍋', '🌽', '🥕', '🍎', '🥦', '🪴', '🍄'];

export default function Games() {
    const [cards, setCards] = useState<string[]>([]);
    const [flipped, setFlipped] = useState<number[]>([]);
    const [solved, setSolved] = useState<number[]>([]);
    const [disabled, setDisabled] = useState(false);
    const [moves, setMoves] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Initialize cards on client to avoid hydration mismatch
    useEffect(() => {
        setCards([...EMOJIS, ...EMOJIS].sort(() => Math.random() - 0.5));
    }, []);

    // Timer logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setSeconds((s) => s + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handleClick = (index: number) => {
        if (disabled || flipped.includes(index) || solved.includes(index)) return;

        // Start timer on first move
        if (!isPlaying && solved.length < 16) {
            setIsPlaying(true);
        }

        const newFlipped = [...flipped, index];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setDisabled(true);
            setMoves(m => m + 1);
            const [first, second] = newFlipped;
            if (cards[first] === cards[second]) {
                const newSolved = [...solved, first, second];
                setSolved(newSolved);
                setFlipped([]);
                setDisabled(false);

                // Stop timer when all pairs are matched
                if (newSolved.length === 16) {
                    setIsPlaying(false);
                }
            } else {
                setTimeout(() => {
                    setFlipped([]);
                    setDisabled(false);
                }, 1000);
            }
        }
    };

    const resetGame = () => {
        setCards([...EMOJIS, ...EMOJIS].sort(() => Math.random() - 0.5));
        setFlipped([]);
        setSolved([]);
        setMoves(0);
        setSeconds(0);
        setIsPlaying(false);
        setDisabled(false);
    };

    const formatTime = (totalSeconds: number) => {
        const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <div className={styles.container}>
            <section id="games" className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className="glow-lemon">---</span>
                    <h2 className="glow-text">Harvest Memory</h2>
                </div>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontFamily: 'inherit' }}>
                        Dig up the soil (🌱) to find matching pairs of crops! <br /><br />
                        <span style={{ color: 'var(--text-main)' }}>
                            Cycles: {moves} | Harvested: {solved.length / 2} / 8 | Time: {formatTime(seconds)}
                        </span>
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 70px)',
                        gap: '10px',
                        justifyContent: 'center',
                        marginBottom: '2.5rem'
                    }}>
                        {cards.map((code, index) => {
                            const isFlipped = flipped.includes(index);
                            const isSolved = solved.includes(index);
                            const isVisible = isFlipped || isSolved;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    style={{
                                        width: '70px',
                                        height: '70px',
                                        background: isVisible ? 'var(--color-wood-light)' : 'var(--color-soil-brown)',
                                        border: '2px solid var(--color-bark-brown)',
                                        borderRadius: '8px',
                                        fontSize: '2.2rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: isVisible ? 'default' : 'pointer',
                                        color: 'var(--text-main)',
                                        transition: 'all 0.3s ease',
                                        boxShadow: isVisible ? 'none' : 'inset 0 0 15px rgba(0,0,0,0.8)',
                                        outline: 'none'
                                    }}
                                >
                                    {isVisible ? code : '🌱'}
                                </button>
                            );
                        })}
                    </div>

                    {solved.length === 16 && (
                        <h3 className="glow-lemon" style={{ marginBottom: '1.5rem', fontFamily: 'inherit' }}>
                            Bountiful Harvest! Field cleared in {moves} cycles taking {formatTime(seconds)}!
                        </h3>
                    )}

                    <button
                        onClick={resetGame}
                        style={{
                            padding: '10px 20px',
                            background: 'var(--color-bark-brown)',
                            border: '1px solid var(--color-green-leaf)',
                            color: 'var(--color-green-neon)',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            fontSize: '1rem',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--color-green-neon)')}
                        onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--color-green-leaf)')}
                    >
                        Replant Field
                    </button>
                </div>
            </section>
        </div>
    );
}
