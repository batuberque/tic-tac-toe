import { type NextPage } from "next"
import styles from '@/styles/Home.module.css'
import Head from "next/head"
import Board from "@/containers/Board"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Tic tac toe
        </title>
        <meta name="description" content="Tic tac toe game built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Board />
      </main>

    </div>
  )
}

export default Home