import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Portfolio() {
  return (
    <div>
      <Hero 
        title="Our Portfolio"
        subtitle="Explore our latest projects and success stories"
      />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            title="E-Commerce Platform"
            description="A full-featured online marketplace with 10,000+ products, real-time inventory, and integrated payment processing."
            link="/portfolio/ecommerce"
          />
          <Card 
            title="SaaS Dashboard"
            description="Modern analytics platform with real-time data visualization, custom reports, and team collaboration features."
            link="/portfolio/saas-dashboard"
          />
          <Card 
            title="Mobile Banking App"
            description="Secure banking application with biometric authentication, instant transfers, and investment tracking."
            link="/portfolio/banking-app"
          />
          <Card 
            title="Healthcare Portal"
            description="Patient management system with appointment scheduling, telemedicine, and electronic health records."
            link="/portfolio/healthcare"
          />
          <Card 
            title="Real Estate Platform"
            description="Property listing site with virtual tours, mortgage calculators, and agent matching algorithms."
            link="/portfolio/real-estate"
          />
          <Card 
            title="Social Media App"
            description="Community platform with user profiles, messaging, content sharing, and advanced moderation tools."
            link="/portfolio/social-media"
          />
        </div>
      </section>

      <section className="bg-zinc-100 dark:bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
            Let's turn your ideas into reality. Contact us today for a free consultation.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
