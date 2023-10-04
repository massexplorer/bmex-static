import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Masses() {
  return (
	<iframe src="https://new.bmex.dev/masses" style={{position: "absolute", height: "100%", border: "none"}} width="100%" title="BMEX Masses" allow="clipboard-write"></iframe>
  )
}
