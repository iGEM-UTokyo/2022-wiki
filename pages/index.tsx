import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={styles.container}>
      test hogehoge
      {count}
      <button onClick={() => { setCount(count + 1) }}>incr</button>
      <Link href="/description">go to description</Link>
    </div>
  )
}

export default Home
