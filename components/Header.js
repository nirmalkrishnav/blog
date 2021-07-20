import Link from 'next/link'
import Bio from './bio'

export default function Header() {
  return (
    <header>
      <div className="name">
        <h4 className="title">
          <Link href="/" passHref={true}>
            Meu =D
          </Link>
        </h4>
        <div className="nav">
          <Link href="/about" passHref={true}>
            About
          </Link>
        </div>
      </div>
    </header>
  )
}
