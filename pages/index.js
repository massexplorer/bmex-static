import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import logo from '../public/bmex-ico.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bayesian Mass Explorer</title>
        <meta name="description" content="Bayesian nuclear mass explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
	<p style={{width:'60%', margin:'auto'}}><a href="https://bmex.dev"><Image alt="BMEX Logo" src={logo}/></a></p>
        <h1 className={styles.title}>
          Welcome to <a href="https://bmex.dev">BMEX!</a>
        </h1>

        <p className={styles.description}>
          Explore masses in the Bayesian way!  
        </p>

        <div className={styles.grid}>
	  <Link href="/data">
          <a className={styles.card}>
            <h2>Masses and Filters &rarr;</h2>
            <p>Binding energies and related quantities for experiment and various models.</p>
          </a>
          </Link>
	  <Link href="/emulator">
          <a className={styles.card}>
            <h2>Emulators &rarr;</h2>
            <p>Binding energies and charge radii using a reduced basis method emulator.</p>
          </a>
          </Link>
          <Link href="/gpe" className={styles.card}>
	  <a className={styles.card}>
            <h2>Gaussian Process Extrapolator &rarr;</h2>
            <p>Simple Gaussian Process explorer for nuclear models.</p>
          </a>
	  </Link>
          <Link href="/pesnet" className={styles.card}>
	  <a className={styles.card}>
            <h2>PESnet &rarr;</h2>
            <p>Dynamically produce nuclear potential energy surfaces using machine learning.</p>
          </a>
	  </Link>
	  <Link href="/beta">
          <a className={styles.card}>
            <h2>Masses and Filters Beta &rarr;</h2>
            <p>Binding energies and related quantities for experiment and various models, including additonal beta features.</p>
          </a>
          </Link>
	  <Link href="https://is.gd/UdaqRX">
          <a className={styles.card}>
            <h2>Bandcamp Challenge 1 &rarr;</h2>
            <p>Starter BMEX view for the ISNET-9 Bandcamp challenge</p>
          </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/massexplorer/bmex-static">&copy; 2022 BMEX Team</a>
      </footer>
    </div>
  )
}
