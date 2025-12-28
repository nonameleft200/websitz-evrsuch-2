import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export default function Card({ title, description, link, linkText = 'Learn More' }: CardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        {description}
      </p>
      {link && (
        <Link href={link} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          {linkText} →
        </Link>
      )}
    </div>
  );
}
