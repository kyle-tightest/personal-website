'use client';
import styles from '../page.module.css';

export default function Services() {
    return (
        <div className={styles.container}>
            <section id="services" className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className="glow-lemon">---</span>
                    <h2 className="glow-text">Farm-To-Terminal Services</h2>
                </div>

                <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    Tired of bloated frameworks and processed, mass-produced web templates packed with unnecessary dependencies? <br /><br />
                    I specialize in <strong>100% organic, hand-written code</strong>. Every variable is carefully cultivated, locally tested, and harvested at peak performance to deliver a clean, unadulterated backend ecosystem. When you work with me, you get transparency—knowing exactly what goes into your software's soil.
                </p>

                <div className={styles.serviceGrid}>
                    <div className={styles.serviceCard}>
                        <h3><span style={{ fontSize: '1.5rem', marginRight: '8px', verticalAlign: 'middle' }}>🪴</span> Small-Batch APIs</h3>
                        <p style={{ marginTop: '0.8rem' }}>
                            Locally sourced RESTful, GraphQL and gRPC endpoints hand-crafted in the language of your choice (except Javascript).
                            We only bring in heavy machinery like code generators or 3rd-party libraries when the harvest scale truly demands it. Whether your data is tilled by hand via raw SQL or cultivated using a heavy-duty ORM tractor, you'll always get clean, high-throughput queries served straight to your frontend without the artificial additives.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3><span style={{ fontSize: '1.5rem', marginRight: '8px', verticalAlign: 'middle' }}>🚜</span> Free-Range Architecture</h3>
                        <p style={{ marginTop: '0.8rem' }}>
                            Cloud environments cultivated to roam and scale naturally. I transform messy <strong>ClickOps</strong> into highly maintainable, modular and hand-written <strong>Infrastructure as Code</strong> using <strong>Terraform</strong>. I work with any cloud provider, at the end of the day they all rain the same. Whether your crop requires an enterprise-scale <strong>Kubernetes</strong> greenhouse or a simpler <strong>container orchestration</strong> strategy, I build resilient beds that handle the harshest seasonal traffic spikes without wilting.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3><span style={{ fontSize: '1.5rem', marginRight: '8px', verticalAlign: 'middle' }}>🚿</span> Hand-Tilled Automation</h3>
                        <p style={{ marginTop: '0.8rem' }}>
                            I cultivate bespoke, pesticide-free <strong>CI/CD pipelines</strong> that continuously water your deployments.
                            My <strong>automated testing</strong> suites naturally weed out bugs before they can take root, while my <strong>business process automation</strong> handles the daily administrative harvest—freeing you to focus purely on growing your core product.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3><span style={{ fontSize: '1.5rem', marginRight: '8px', verticalAlign: 'middle' }}>🔍</span> Heritage Code Audits</h3>
                        <p style={{ marginTop: '0.8rem' }}>
                            Suffering from overgrown legacy spaghetti code? I provide meticulous pruning, digging deep to expose root issues, and refactoring to restore your application's natural environment back to a sustainable state.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3><span style={{ fontSize: '1.5rem', marginRight: '8px', verticalAlign: 'middle' }}>🌾</span> Seed-to-Harvest SDLC</h3>
                        <p style={{ marginTop: '0.8rem' }}>
                            Guiding your software through every season of the <strong>Software Development Life Cycle</strong>. From planting the initial architectural seeds to nurturing asynchronous, remote-first agile workflows and finally harvesting a mature, production-ready product, I ensure the entire lifecycle is transparent, sustainable, and strictly organic.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center', borderTop: '2px dashed var(--color-wood-light)', paddingTop: '3rem', paddingBottom: '2rem' }}>
                    <h3 className="glow-lemon" style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'inherit' }}>Ready for a Harvest?</h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <a
                            href="mailto:kyletightest@gmail.com"
                            style={{
                                padding: '12px 24px',
                                background: 'var(--color-bark-brown)',
                                border: '1px solid var(--color-green-leaf)',
                                color: 'var(--color-green-neon)',
                                borderRadius: '6px',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 0 15px rgba(150, 224, 114, 0.4)')}
                            onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)')}
                        >
                            ✉️ kyletightest@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kyle-mj-titus/"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                padding: '12px 24px',
                                background: 'var(--color-bark-brown)',
                                border: '1px solid var(--color-yellow-lemon)',
                                color: 'var(--color-yellow-lemon)',
                                borderRadius: '6px',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 0 15px rgba(222, 205, 89, 0.4)')}
                            onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)')}
                        >
                            🔗 Connect on LinkedIn
                        </a>
                    </div>
                </div>

            </section>
        </div>
    );
}
