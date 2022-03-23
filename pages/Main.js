import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Main.module.scss';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button } from '@mui/material';

const Main = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.all}>
      <div className={styles.topbar} id="topbar">
        <span className={styles.logo}>
          <Link href="/">
            <a className={styles.logoLink}>
              Unic<span className={styles.topbarTaste}>taste</span>
            </a>
          </Link>
        </span>
        <nav className={styles.nav}>
          <a href="#usage" className={styles.linkNav}>
            Usage
          </a>
          <a href="/app" className={styles.linkNav}>
            App
          </a>
          <a href="#contact" className={styles.linkNav}>
            Contact Us
          </a>
        </nav>
      </div>
      <section className={styles.container}>
        <main className={styles.home}>
          <div className={styles.left}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sagittis mauris non ex gravida, sit amet vehicula
              neque mollis.
            </p>
            <div className={styles.linkRoute}>
              <a href="#usage" className={styles.link}>
                Learn More
                <ArrowForwardSharpIcon
                  className={styles.arrow}
                  sx={{
                    fontSize: '2rem',
                    height: '1rem',
                    width: '1rem',
                    marginLeft: '0.5rem',
                    color: '#CB4085',
                  }}
                />
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <Image src="/assets/main-hero-1.svg" height={404} width={528} />
          </div>
        </main>
      </section>
      <section className={styles.container}>
        <main className={styles.usage} id="usage">
          <div className={styles.top}>
            <h1 className={styles.h1}>Usage</h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.leftImg}>
              <Image src="/assets/usage.svg" height={404} width={528} />
            </div>
            <div className={styles.rightText}>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sagittis mauris non ex gravida, sit amet vehicula
                neque mollis.
              </p>
              <div className={styles.linkRoute}>
                <Link href="/app">
                  <a className={styles.link}>
                    Go to App
                    <ArrowRightIcon
                      className={styles.arrow}
                      sx={{
                        fontSize: '4rem',
                        height: '2rem',
                        width: '2rem',
                        color: '#CB4085',
                      }}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className={styles.contactContainer}>
        <main className={styles.contact} id="contact">
          <div className={styles.top}>
            <h1 className={styles.contactText}>Contact Us</h1>
          </div>
          <div className={styles.bottom}>
            <form className={styles.leftContact}>
              <input
                type="text"
                placeholder="Your Name"
                className={styles.inputSmall}
              />
              <input
                type="text"
                placeholder="Your Email Adress"
                className={styles.inputSmall}
              />
              <textarea
                name="text"
                placeholder="What is in your mind?"
                className={styles.inputBig}
              />
              <button
                type="submit"
                onClick={handleClick}
                className={styles.submit}
              >
                Send
              </button>
            </form>
            <div className={styles.rightContact}>
              <Image src="/assets/contact2.svg" height={350} width={450} />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Main;
