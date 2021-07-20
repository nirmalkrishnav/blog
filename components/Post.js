import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Post({ post }) {
  return (
    <div className="post" key={post.fm.title}>
      <h4 className="post-title">
        <Link href={`/blog/${post.slug}`} passHref={true}><a>{post.fm.title}</a></Link>
      </h4>
      <div className="date">{post.fm.date}</div>
      <div className="gist">{post.fm.gist}</div>
    </div>
  )
}
