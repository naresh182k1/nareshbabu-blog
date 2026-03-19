import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Naresh Babu",
  description: "All blog posts",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-10">
        All Posts
      </h1>

      {posts.length === 0 ? (
        <p className="text-zinc-500">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="pb-10 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <time className="text-sm text-zinc-500 dark:text-zinc-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
