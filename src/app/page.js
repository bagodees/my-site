import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">My Homelab Site</h1>
        <p className="text-gray-600 text-lg">
          Documenting my self-hosted setup, homelab adventures, and open-source finds.
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Latest Posts</h2>
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">
          View all →
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors"
          >
            <p className="text-sm text-gray-500 mb-1">{post.date}</p>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}