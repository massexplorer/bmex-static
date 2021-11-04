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
            <h2>Masses &rarr;</h2>
            <p>Binding energies and related quantities for experiment and various models.</p>
          </a>
          </Link>
          <Link href="/plots" className={styles.card}>
	  <a className={styles.card}>
            <h2>Plots &rarr;</h2>
            <p>Placeholder plot page! This will have plots for isotopic/isotonic chains (and more!).</p>
          </a>
	  </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/kylegodbey/bmex-static">&copy; 2021 BMEX Team</a>
      </footer>
    </div>
  )
}
