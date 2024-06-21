import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import instagramIcon from '../../assets/instagram-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedInIcon from '../../assets/linkedin-light.svg';

function Hero() {
  return (
    <section
      id='hero'
      className={styles.container}
    >
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt='Profile picture'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color made icon'
        />
      </div>

      <div className={styles.info}>
        <h1>
          Luka <br />
          Kögl
        </h1>
        <h2>Bachelor of Computer Science Engineering</h2>
        <span>
          <a
            href='https://instagram.com'
            target='_blank'
          >
            <img
              src={instagramIcon}
              alt='instagram icon'
            />
          </a>
          <a
            href='https://github.com'
            target='_blank'
          >
            <img
              src={githubIcon}
              alt='github icon'
            />
          </a>
          <a
            href='https://linkedIn.com'
            target='_blank'
          >
            <img
              src={linkedInIcon}
              alt='linkedIn icon'
            />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
