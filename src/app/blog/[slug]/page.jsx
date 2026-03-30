import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { compileMDX } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const { content, title, date, author } = getPostBySlug(slug)

  const { content: MDXContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  })

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-1">{date}</p>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-8">By {author}</p>
      <article className="prose prose-neutral max-w-none">
        {MDXContent}
      </article>
    </main>
  )
}