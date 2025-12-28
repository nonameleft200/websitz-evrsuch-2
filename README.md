# MyWebsite - Modern Next.js Application

A scalable, professional Next.js 15 website built with TypeScript and Tailwind CSS. This project is designed to easily scale up to 50+ pages with a clean, maintainable architecture.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **Reusable Components** (Header, Footer, Hero, Card)
- **Multiple Pages** ready to use
- **Responsive Design** optimized for all devices
- **Dark Mode** support
- **SEO Optimized**

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog with articles
│   ├── contact/           # Contact form
│   ├── portfolio/         # Portfolio showcase
│   ├── services/          # Services overview
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   └── Card.tsx          # Card component
└── ...
```

## 🎯 Current Pages

1. **Home** (`/`) - Landing page with hero and features
2. **About** (`/about`) - Company information
3. **Services** (`/services`) - Service offerings
4. **Portfolio** (`/portfolio`) - Project showcase
5. **Blog** (`/blog`) - Blog posts listing
6. **Blog Post** (`/blog/getting-started-nextjs-15`) - Individual article
7. **Contact** (`/contact`) - Contact form

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding New Pages

To add a new page:

1. Create a new folder in `src/app/` (e.g., `src/app/pricing/`)
2. Add a `page.tsx` file with your content
3. Import and use existing components (Hero, Card, etc.)
4. Add navigation link in `src/components/Header.tsx`

Example:

```tsx
// src/app/pricing/page.tsx
import Hero from "@/components/Hero";

export default function Pricing() {
  return (
    <div>
      <Hero title="Pricing" subtitle="Choose your plan" />
      {/* Your content */}
    </div>
  );
}
```

## 🎨 Customization

### Colors

Edit Tailwind colors in `tailwind.config.ts`

### Components

All reusable components are in `src/components/` - modify them to match your brand

### Layout

Global layout (Header/Footer) is in `src/app/layout.tsx`

## 📦 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Package Manager:** npm

## 🚀 Deployment

Deploy easily on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use other platforms like Netlify, AWS, or your own server.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Built with ❤️ using Next.js
