export const metadata = {
  title: "About | Naresh Babu",
  description: "About Naresh Babu",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
        About Me
      </h1>

      <div className="prose">
        <p>
          Hi, I&apos;m Naresh Babu -- a software engineer who loves building
          things that make a difference. I&apos;m passionate about clean code,
          thoughtful architecture, and shipping software that people enjoy using.
        </p>

        <p>
          This blog is where I share what I&apos;m learning, thinking about, and
          working on. Topics range from software engineering and system design to
          productivity and the occasional deep dive into a specific technology.
        </p>

        <h2>What I Do</h2>
        <p>
          I work across the full stack, with a focus on building scalable,
          maintainable systems. I enjoy working with modern web technologies,
          cloud infrastructure, and exploring new tools and frameworks.
        </p>

        <h2>Get in Touch</h2>
        <p>
          Feel free to reach out if you want to chat about technology, share
          ideas, or collaborate on something interesting. You can find me on{" "}
          <a href="https://github.com/nareshbabu">GitHub</a> or drop me an
          email.
        </p>
      </div>
    </div>
  );
}
