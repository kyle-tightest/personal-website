'use client';
import { useState, useEffect } from 'react';
import styles from './HarvestMemory.module.css';

const EMOJIS = ['🍅', '🍋', '🌽', '🥕', '🍎', '🥦', '🪴', '🍄'];

export default function HarvestMemory() {
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
        <div className={styles.gameContainer}>
            <p className={styles.instructions}>
                Dig up the soil (🌱) to find matching pairs of crops! <br /><br />
                <span className={styles.stats}>
                    Cycles: {moves} | Harvested: {solved.length / 2} / 8 | Time: {formatTime(seconds)}
                </span>
            </p>

            <div className={styles.grid}>
                {cards.map((emoji, index) => {
                    const isFlipped = flipped.includes(index);
                    const isSolved = solved.includes(index);
                    const isVisible = isFlipped || isSolved;
                    return (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`${styles.card} ${isVisible ? styles.flipped : ''}`}
                            disabled={isVisible}
                        >
                            {isVisible ? emoji : '🌱'}
                        </button>
                    );
                })}
            </div>

            {solved.length === 16 && (
                <h3 className="glow-lemon" style={{ marginBottom: '1.5rem', fontFamily: 'inherit' }}>
                    Bountiful Harvest! Field cleared in {moves} cycles taking {formatTime(seconds)}!
                </h3>
            )}

            <button onClick={resetGame} className={styles.resetButton}>
                Replant Field
            </button>
        </div>
    );
}
