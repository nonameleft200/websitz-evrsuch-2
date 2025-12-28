import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-zinc-900 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white">
              MyWebsite
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
