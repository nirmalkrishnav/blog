import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Post({ post }) {
  return (
    <div className={styles.card} key={post.fm.title}>
      <Image
        src={post.fm.cover_image}
        className="thumbnail"
        layout="intrinsic"
        width={250}
        height={150}
        alt={post.fm.title}
      />
      <h4>
        {post.fm.title}
        <small>{post.fm.date}</small>
        <Link href={`/blog/${post.slug}`} passHref={false}>
            read more
        </Link>
      </h4>
    </div>
  )
}
