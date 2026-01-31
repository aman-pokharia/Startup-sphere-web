import Link from "next/link";

export const IdeationSection = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        {/* From Ideation to Execution */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              From Ideation to Execution
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              We&apos;re here to fuel your journey and transform ideas into thriving businesses. Let&apos;s innovate, collaborate, and shape the future together!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🚀",
                title: "Nurture Ideas",
                desc: "We provide a supportive environment where innovative ideas can flourish and grow.",
              },
              {
                emoji: "💡",
                title: "Empower Entrepreneurs",
                desc: "Access mentorship, resources, and guidance from experienced professionals and successful founders.",
              },
              {
                emoji: "🌱",
                title: "Accelerate Growth",
                desc: "Connect with like-minded individuals and build networks that accelerate your startup journey.",
              },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[rgba(112,66,248,0.2)] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-[rgba(112,66,248,0.35)] transition-colors"
              >
                <span className="text-3xl" aria-hidden>{emoji}</span>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Flagship Events */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Flagship Events
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Join us for exciting competitions, workshops, and networking opportunities
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[rgba(112,66,248,0.2)] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-[rgba(112,66,248,0.35)] transition-colors group">
              <span className="text-3xl" aria-hidden>🐟</span>
              <h3 className="text-xl font-semibold text-white">Fish Tank</h3>
              <p className="text-gray-400 leading-relaxed flex-1">
                Our flagship pitching competition where creativity meets courage. Participants pitch their innovative ideas to a panel of distinguished judges and mentors.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-[#b49bff] hover:text-purple-400 transition-colors font-medium"
              >
                Learn More
                <span className="text-sm">→</span>
              </Link>
            </div>
            <div className="rounded-2xl border border-[rgba(112,66,248,0.2)] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-[rgba(112,66,248,0.35)] transition-colors group">
              <span className="text-3xl" aria-hidden>🎨</span>
              <h3 className="text-xl font-semibold text-white">Workshops</h3>
              <p className="text-gray-400 leading-relaxed flex-1">
                Hands-on learning sessions designed to help you develop practical skills. From design tools to business strategies, we&apos;ve got you covered.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-[#b49bff] hover:text-purple-400 transition-colors font-medium"
              >
                Learn More
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
