import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({
  fm: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
     
      <div className="post">
        <h4 className="post-title">{title}</h4>
        <div className="date">{date}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>

      <Link href="/">← Go back</Link>
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
