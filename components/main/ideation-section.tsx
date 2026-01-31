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
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
                title: "Nurture Ideas",
                desc: "We provide a supportive environment where innovative ideas can flourish and grow.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                ),
                title: "Empower Entrepreneurs",
                desc: "Access mentorship, resources, and guidance from experienced professionals and successful founders.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "Accelerate Growth",
                desc: "Connect with like-minded individuals and build networks that accelerate your startup journey.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[rgba(112,66,248,0.2)] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-[rgba(112,66,248,0.35)] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">{icon}</div>
                  <h3 className="text-xl font-semibold text-white flex-grow">{title}</h3>
                </div>
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
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 11a2 2 0 1 0-4 0 2 2 0 0 0-4 0 2 2 0 1 0-4 0 2 2 0 0 0 8 0 2 2 0 0 0 0 0Z" />
                    <path d="M12 13v8" />
                    <path d="M12 3v3" />
                    <path d="M5 12h3" />
                    <path d="M16 12h3" />
                    <path d="M16 5a2 2 0 0 1 2 2" />
                    <path d="M8 5a2 2 0 0 0-2 2" />
                    <path d="M8 19a2 2 0 0 1-2-2" />
                    <path d="M16 19a2 2 0 0 0 2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white flex-grow">Fish Tank</h3>
              </div>
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
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14V2" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
                    <path d="M18 14v4" />
                    <path d="M15 14v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white flex-grow">Workshops</h3>
              </div>
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
