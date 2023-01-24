import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <h1>HELLO</h1>
      <Button variant='contained' >Prime</Button>
    </div>
  )
}
