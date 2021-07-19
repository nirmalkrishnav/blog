import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Image from 'next/image'

export default function PostPage({
  fm: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/">Back</Link>
      {title} on {date}
      <Image src={cover_image} 
       className="thumbnail"
        layout="intrinsic"
        width={250}
        height={150}
        alt={title}/>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((file) => ({
    params: {
      slug: file.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const md = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
  const { data: fm, content } = matter(md)

  return {
    props: { fm, slug, content },
  }
}
