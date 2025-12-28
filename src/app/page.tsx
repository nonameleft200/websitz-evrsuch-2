import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <Hero 
        title="Welcome to MyWebsite"
        subtitle="Building modern, scalable web applications with Next.js"
        ctaText="Get Started"
        ctaLink="/about"
      />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="Web Development"
            description="Create stunning, responsive websites using the latest technologies and best practices."
            link="/services"
          />
          <Card 
            title="UI/UX Design"
            description="Design beautiful user interfaces that provide exceptional user experiences."
            link="/services"
          />
          <Card 
            title="Consulting"
            description="Get expert advice on your digital transformation and technology strategy."
            link="/contact"
          />
        </div>
      </section>

      <section className="bg-zinc-100 dark:bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card 
              title="E-Commerce Platform"
              description="A full-featured online store with payment integration and inventory management."
              link="/portfolio"
            />
            <Card 
              title="SaaS Dashboard"
              description="Modern analytics dashboard with real-time data visualization and reporting."
              link="/portfolio"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
