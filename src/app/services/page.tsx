import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Services() {
  return (
    <div>
      <Hero 
        title="Our Services"
        subtitle="Comprehensive digital solutions for your business"
        ctaText="Contact Us"
        ctaLink="/contact"
      />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            title="Web Development"
            description="Full-stack web applications using React, Next.js, Node.js and modern frameworks."
            link="/contact"
            linkText="Get a Quote"
          />
          <Card 
            title="Mobile Apps"
            description="Native and cross-platform mobile applications for iOS and Android."
            link="/contact"
            linkText="Get a Quote"
          />
          <Card 
            title="UI/UX Design"
            description="User-centered design that combines aesthetics with functionality."
            link="/contact"
            linkText="Get a Quote"
          />
          <Card 
            title="E-Commerce"
            description="Complete online store solutions with payment integration and analytics."
            link="/contact"
            linkText="Get a Quote"
          />
          <Card 
            title="Cloud Services"
            description="Cloud infrastructure setup, migration, and optimization on AWS, Azure, and GCP."
            link="/contact"
            linkText="Get a Quote"
          />
          <Card 
            title="Consulting"
            description="Strategic technology consulting to help your business grow and scale."
            link="/contact"
            linkText="Get a Quote"
          />
        </div>
      </section>

      <section className="bg-zinc-100 dark:bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
            Why Choose Us?
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
            We combine technical expertise with business acumen to deliver solutions 
            that not only work perfectly but also drive real business value.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
