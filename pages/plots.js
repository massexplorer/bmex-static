import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Plots() {
  return (
	<iframe src="https://app.bmex.dev" style={{position: "absolute", height: "100%", border: "none"}} width="100%" title="BMEX App"></iframe>
  )
}
