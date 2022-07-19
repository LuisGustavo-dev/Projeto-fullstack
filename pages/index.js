import styles from '../styles/Home.module.css'
import Head from 'next/Head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
      </Head>
      <div className={styles.container}>
        <h1>Bem vindo</h1>
        <h2>Projeto feito por Luis Gustavo</h2>
      </div>
    </>
  )
}
