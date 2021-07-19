import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref={true}>
        Meu =D
      </Link>
    </header>
  )
}
