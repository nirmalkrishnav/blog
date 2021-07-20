import Link from 'next/link'
import Bio from './bio'

export default function Header() {
  return (
    <header>
      <div className="name">
        <h4 className="title">Meu =D</h4>
        <div className="nav">
          <Link href="/" passHref={true}>
            Home
          </Link>
          <Link href="/about" passHref={true}>
            About
          </Link>
        </div>
      </div>
    </header>
  )
}
