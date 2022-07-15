import styles from '../styles/Home.module.css'
import Head from 'next/Head'
import Image from 'next/Image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World Next!</h1>
      </div>
    </>
  )
}
