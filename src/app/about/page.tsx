import Hero from "@/components/Hero";

export default function About() {
  return (
    <div>
      <Hero 
        title="About Us"
        subtitle="Learn more about our mission and values"
      />
      
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Our Story</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
            We are a team of passionate developers and designers dedicated to creating 
            exceptional digital experiences. Our journey began with a simple mission: 
            to help businesses succeed in the digital world.
          </p>
          
          <h2 className="text-3xl font-bold mb-6 mt-12 text-zinc-900 dark:text-white">Our Mission</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
            To empower businesses with cutting-edge web solutions that drive growth 
            and deliver measurable results. We believe in the power of technology to 
            transform ideas into reality.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12 text-zinc-900 dark:text-white">Our Values</h2>
          <ul className="space-y-4 text-lg text-zinc-700 dark:text-zinc-300">
            <li><strong>Innovation:</strong> We stay ahead of the curve with the latest technologies</li>
            <li><strong>Quality:</strong> Excellence is not just a goal, it's our standard</li>
            <li><strong>Collaboration:</strong> We work closely with our clients as partners</li>
            <li><strong>Integrity:</strong> Transparency and honesty guide everything we do</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
