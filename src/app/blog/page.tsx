import Hero from "@/components/Hero";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt: "Learn the fundamentals of Next.js 15 and build your first application with the App Router.",
    date: "December 20, 2025",
    author: "John Doe",
    slug: "getting-started-nextjs-15"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Deep dive into Tailwind CSS utility classes and learn how to create beautiful, responsive designs.",
    date: "December 18, 2025",
    author: "Jane Smith",
    slug: "mastering-tailwind-css"
  },
  {
    id: 3,
    title: "TypeScript Best Practices",
    excerpt: "Discover essential TypeScript patterns and practices for building robust applications.",
    date: "December 15, 2025",
    author: "Mike Johnson",
    slug: "typescript-best-practices"
  },
  {
    id: 4,
    title: "Building Scalable APIs",
    excerpt: "Learn how to design and implement scalable RESTful and GraphQL APIs.",
    date: "December 12, 2025",
    author: "Sarah Williams",
    slug: "building-scalable-apis"
  },
  {
    id: 5,
    title: "React Performance Optimization",
    excerpt: "Techniques and strategies to optimize your React applications for better performance.",
    date: "December 10, 2025",
    author: "Tom Brown",
    slug: "react-performance"
  },
  {
    id: 6,
    title: "Modern CSS Grid Layouts",
    excerpt: "Master CSS Grid and create complex, responsive layouts with ease.",
    date: "December 8, 2025",
    author: "Emily Davis",
    slug: "css-grid-layouts"
  }
];

export default function Blog() {
  return (
    <div>
      <Hero 
        title="Our Blog"
        subtitle="Insights, tutorials, and the latest web development trends"
      />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  {post.date} • {post.author}
                </div>
                <h2 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
