import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Plots() {
  useEffect(() => {
    Array.from(document.getElementsByTagName("iframe")).forEach((iframe) => {
      iframe.contentWindow.addEventListener(
        "load",
        () => {
          const doc = iframe.contentWindow.document;
          iframe.height = doc.body.scrollHeight;
        },
        true
      );
      iframe.contentWindow.addEventListener(
        "resize",
        () => {
          iframe.height = iframe.contentWindow.document.body.scrollHeight + 40;
        },
        true
      );
    });
  }, []);
  return (
	<iframe src="https://bmex.azurewebsites.net" height="100%" width="100%" title="BMEX App"></iframe>
  )
}
