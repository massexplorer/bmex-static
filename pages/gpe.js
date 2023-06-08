import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function GPE() {
  return (
	<iframe src="https://beta.bmex.dev/gpe" style={{position: "absolute", height: "100%", border: "none"}} width="100%" title="BMEX App"></iframe>
  )
}
