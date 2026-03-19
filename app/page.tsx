import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Hi, I&apos;m Naresh Babu
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I write about software engineering, technology, and things I&apos;m
          learning along the way. Welcome to my corner of the internet.
        </p>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-8">
          Recent Posts
        </h2>
        {recentPosts.length === 0 ? (
          <p className="text-zinc-500 dark:text-zinc-500">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="space-y-10">
            {recentPosts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <time className="text-sm text-zinc-500 dark:text-zinc-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        )}

        {recentPosts.length > 0 && (
          <div className="mt-12">
            <Link
              href="/blog"
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              View all posts &rarr;
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
