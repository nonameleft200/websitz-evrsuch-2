import Hero from "@/components/Hero";

export default function Contact() {
  return (
    <div>
      <Hero 
        title="Get In Touch"
        subtitle="We'd love to hear from you"
      />
      
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Email</h3>
            <p className="text-zinc-600 dark:text-zinc-400">hello@mywebsite.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Phone</h3>
            <p className="text-zinc-600 dark:text-zinc-400">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Location</h3>
            <p className="text-zinc-600 dark:text-zinc-400">San Francisco, CA</p>
          </div>
        </div>
      </section>
    </div>
  );
}
