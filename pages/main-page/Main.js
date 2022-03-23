import Topbar from '../../components/topbar/Topbar';
import Image from 'next/image';
import styles from '../../styles/Main.module.scss';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

const Main = () => {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.home}>
          <div className={styles.left}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sagittis mauris non ex gravida, sit amet vehicula
              neque mollis. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Proin ac dapibus ante.
            </p>
            <div className={styles.linkRoute}>
              <a href="/usage" className={styles.link}>
                Learn More
                <ArrowForwardSharpIcon
                  className={styles.arrow}
                  sx={{
                    fontSize: '4rem',
                    height: '2rem',
                    width: '2rem',
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
      </div>
      <div className={styles.foot}></div>
    </div>
  );
};

export default Main;
