import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Emulator() {
  return (
	<iframe src="https://app.bmex.dev/emulator" style={{position: "absolute", height: "100%", border: "none"}} width="100%" title="Emulator"></iframe>
  )
}
