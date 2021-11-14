import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Data() {
  return (
	<iframe src="https://bmex.azurewebsites.net/masses" style={{position: "absolute", height: "100%", border: "none"}} width="100%" title="Masses"></iframe>
  )
}
