export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
          Getting Started with Next.js 15
        </h1>
        <div className="text-zinc-600 dark:text-zinc-400">
          December 20, 2025 • By John Doe
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
          Next.js 15 brings exciting new features and improvements to the already powerful React framework. 
          In this comprehensive guide, we'll explore everything you need to know to get started.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8 text-zinc-900 dark:text-white">What is Next.js?</h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-6">
          Next.js is a React framework that enables you to build full-stack web applications with 
          features like server-side rendering, static site generation, and API routes out of the box.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8 text-zinc-900 dark:text-white">Key Features</h2>
        <ul className="space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li><strong>App Router:</strong> New routing system with improved performance</li>
          <li><strong>Server Components:</strong> Render components on the server by default</li>
          <li><strong>Streaming:</strong> Progressively render UI as data becomes available</li>
          <li><strong>Built-in Optimization:</strong> Automatic image, font, and script optimization</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 mt-8 text-zinc-900 dark:text-white">Getting Started</h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          Create a new Next.js project with the following command:
        </p>
        <pre className="bg-zinc-900 text-white p-4 rounded-lg mb-6 overflow-x-auto">
          <code>npx create-next-app@latest my-app</code>
        </pre>

        <h2 className="text-2xl font-bold mb-4 mt-8 text-zinc-900 dark:text-white">Conclusion</h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-6">
          Next.js 15 makes it easier than ever to build performant, scalable web applications. 
          Start exploring today and unlock the full potential of React development!
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700">
        <a href="/blog" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          ← Back to Blog
        </a>
      </div>
    </article>
  );
}
