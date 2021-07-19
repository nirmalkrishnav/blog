import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="name">
        Meu =D
        <div className="nav">
          <Link href="/" passHref={true}>
            Home
          </Link>
        </div>
      </div>
      <div className="bio">Software Engineer, Gamer</div>
    </header>
  )
}
