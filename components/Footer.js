import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer(){
    return(
      <footer className={styles.footer}>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
    )
}