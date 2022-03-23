import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Topbar from '../components/topbar/Topbar';
import Main from './main-page/Main';

export default function Home() {
  return (
    <div className={styles.container}>
      <Topbar />
      <Main />
    </div>
  );
}
