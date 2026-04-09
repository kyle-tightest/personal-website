'use client';
import { useState, useEffect } from 'react';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    onComplete?: () => void;
    hideCursorOnComplete?: boolean;
}

export default function TypewriterText({
    text,
    delay = 0,
    speed = 50,
    className = '',
    onComplete,
    hideCursorOnComplete = true
}: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const interval = setInterval(() => {
            // Use function updater to avoid closure stale state
            setDisplayedText((prev) => text.substring(0, prev.length + 1));
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                setCompleted(true);
                if (onComplete) onComplete();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, started, speed, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {(!completed || !hideCursorOnComplete) && <span className={styles.cursor}></span>}
        </span>
    );
}
