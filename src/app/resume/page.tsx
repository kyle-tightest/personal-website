'use client';
import { useState } from 'react';
import styles from '../page.module.css';

export default function Resume() {
    const [expandedCommit, setExpandedCommit] = useState<string | null>(null);

    const toggleExpand = (hash: string) => {
        setExpandedCommit(expandedCommit === hash ? null : hash);
    };

    return (
        <div className={styles.container}>
            <section id="resume" className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className="glow-lemon">---</span>
                    <h2 className="glow-tomato">git log</h2>
                </div>
                <div className={styles.timeline}>
                    <div className={styles.commit} onClick={() => toggleExpand('f7e8d9c')}>
                        <div className={styles.commitInner}>
                            <div className={styles.commitHash}>
                                commit f7e8d9c <span className={styles.gitRef}>(HEAD -{">"} main)</span>
                            </div>
                            <div className={styles.commitInfo}>
                                <h4>Software Engineering Team Lead @ Lula</h4>
                                <p>Building a customer platform for business funding and banking</p>
                                <span className={styles.date}>January 2025 - Present</span>
                                {expandedCommit === 'f7e8d9c' && (
                                    <div className={styles.commitDetails}>
                                        <ul>
                                            <li>WIP</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.commit} onClick={() => toggleExpand('a1b2c3d')}>
                        <div className={styles.commitInner}>
                            <div className={styles.commitHash}>
                                commit a1b2c3d <span className={styles.gitRef}></span>
                            </div>
                            <div className={styles.commitInfo}>
                                <h4>Chief Technology Officer @ Precium</h4>
                                <p>Building Payment Orchestration systems from scratch</p>
                                <span className={styles.date}>May 2022 - Dec 2024</span>
                                {expandedCommit === 'a1b2c3d' && (
                                    <div className={styles.commitDetails}>
                                        <ul>
                                            <li>Built software engineering department of 12 plus contractors</li>
                                            <li>Built self-organising, multi-disciplinary, cross-functional teams with team leads</li>
                                            <li>Built mature processes around security, devops, automation and QA that allow us to release multiple times a day on a Friday</li>
                                            <li>Built automated, resilient and robust systems that let us know when there are issues.</li>
                                            <li>Built a culture of innovation where new ideas are encouraged and experimentation is celebrated</li>
                                            <li>Built a remote-first workplace where asynchronous ways of working are the standard and excellent written communication is a must</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.commit} onClick={() => toggleExpand('e5f6g7h')}>
                        <div className={styles.commitInner}>
                            <div className={styles.commitHash}>
                                commit e5f6g7h {expandedCommit === 'e5f6g7h' ? '(HEAD -> main)' : ''}
                            </div>
                            <div className={styles.commitInfo}>
                                <h4>Principal Software Engineer @ The Delta</h4>
                                <p>Building MVPs for an up & coming venture builder</p>
                                <span className={styles.date}>October 2020 - April 2022</span>
                                {expandedCommit === 'e5f6g7h' && (
                                    <div className={styles.commitDetails}>
                                        <ul>
                                            <li>Tech lead on 1 venture with oversight on some other ventures</li>
                                            <li>Assisted with setting software standards for the company. Created a terraform reference architecture for cloud infrastructure across the company.</li>
                                            <li>Part of the committee that approved/disapproved of new technology choices across the company. Also did a few POCs for new tech myself.</li>
                                            <li>Interviewed and hired multiple candidates for software engineering and DevOps. Created technical assignment for DevOps role.</li>
                                            <li>Assisted with performance evaluation matrices for the company, which the Delta now uses to evaluate all their software engineers.</li>
                                            <li>Mentored junior software engineers.</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.commit} onClick={() => toggleExpand('i9j0k1l')}>
                        <div className={styles.commitInner}>
                            <div className={styles.commitHash}>
                                commit i9j0k1l {expandedCommit === 'i9j0k1l' ? '(HEAD -> main)' : ''}
                            </div>
                            <div className={styles.commitInfo}>
                                <h4>Software Developer Team Lead @ Entersekt</h4>
                                <p>Working for an agile team responsible for developing a on-client-premises server that enables our clients to do, among other things, strong authentication of mobile devices.</p>
                                <span className={styles.date}>January 2015 - September 2020</span>
                                {expandedCommit === 'i9j0k1l' && (
                                    <div className={styles.commitDetails}>
                                        <p style={{ marginBottom: '0.8rem', color: 'var(--color-yellow-lemon)' }}><strong>Key elements we focused on:</strong></p>
                                        <ul>
                                            <li>Making the system self-diagnostic and self-healing</li>
                                            <li>Instead of making custom software for clients, we rather develop features for our core product and make the system as configurable and backwards compatible as possible.</li>
                                            <li>Automating as far as possible, sane defaults with the option to configure later. Also automating testing.</li>
                                            <li>Portability of the software, for the clients&apos; environments and ease of testing (ISO, Amazon image, virtual machine image, Docker, Kubernetes Helm chart, etc.)</li>
                                            <li>Secure development practices</li>
                                        </ul>
                                        <p style={{ marginTop: '0.8rem', fontStyle: 'italic', opacity: 0.9 }}>All while delivering functionality that enabled secure channels for our clients</p>

                                        <p style={{ marginTop: '1.5rem', marginBottom: '0.8rem', color: 'var(--color-yellow-lemon)' }}><strong>Technologies involved:</strong></p>
                                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                            <li>Java on Tomcat</li>
                                            <li>Cassandra (NoSQL)</li>
                                            <li>Linux server</li>
                                            <li>RPM (Red Hat)</li>
                                            <li>Systemd</li>
                                            <li>Bash/Python scripting</li>
                                            <li>Jenkins CI</li>
                                            <li>Docker</li>
                                        </ul>

                                        <p style={{ marginTop: '1.5rem', marginBottom: '0.8rem', color: 'var(--color-yellow-lemon)' }}><strong>Towards the end of my time here I worked on a successful 3-month project which involved:</strong></p>
                                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                            <li>Golang</li>
                                            <li>DDD microservices</li>
                                            <li>gRPC</li>
                                            <li>Docker, k8s, Helm</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
