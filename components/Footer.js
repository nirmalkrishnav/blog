import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <Link href="https://github.com/nirmalkrishnav">github</Link>
        &nbsp;•&nbsp;
        <Link href="https://www.linkedin.com/in/nirmal-krishna/">linkedIn</Link>
        &nbsp;•&nbsp;
        <Link href="https://twitter.com/meuequalsd?lang=en">twitter</Link>
      </div>
    </footer>
  )
}
