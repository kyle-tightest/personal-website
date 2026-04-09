import TypewriterText from '@/components/TypewriterText';
import styles from './page.module.css';

const organicAscii = `           &&& &&  & &&
      && &\\/&\\|& ()|/ @, &&
      &\\/(/&/&||/& /_/)_&/_&
   &() &\\/&|()|/&\\/ '%" & ()
  &_\\_&&_\\ |& |&&/&__%_/_& &&
&&   && & &| &| /& & % ()& /&&
 ()&_---()&\\&\\|&&-&&--%---()~
     &&     \\|||
             |||
             |||
             |||
       , -=-~  .-^- _`;

export default function Home() {
  return (
    <div className={styles.container}>
      <section id="hero" className={styles.section}>
        <h1 className={styles.heroTitle}>
          <span className="glow-lemon">{'>'}</span> <TypewriterText text="./organic_code.sh" speed={70} delay={500} />
        </h1>
        <p className={styles.heroSubtitle}>
          <TypewriterText text="Organic, Artisanal, Hand-Written Code." speed={40} delay={2000} />
        </p>
        <div className={styles.heroDesc}>
          <TypewriterText
            text="Small-batch, artisanal code forged with locally sourced keystrokes. Cultivated in a natural environment, free from artificial dependencies and synthetic bloat."
            speed={25}
            delay={4000}
            hideCursorOnComplete={true}
          />
        </div>
        <div className={styles.asciiArt}>
          <TypewriterText
            text={organicAscii}
            speed={5}
            delay={8500}
          />
        </div>
      </section>
    </div>
  );
}
