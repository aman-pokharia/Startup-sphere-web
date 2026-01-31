import Link from "next/link";

export const JourneyCTA = () => {
  return (
    <section 
      className="w-full px-4 md:px-8 py-32 md:py-40"
      style={{
        backgroundImage: "url('/project-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-5xl mx-auto relative bg-black/30 backdrop-blur-sm rounded-3xl p-2">
        {/* Glow / gradient orbs */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative rounded-3xl border border-[rgba(112,66,248,0.3)] bg-[rgba(3,0,20,0.7)] backdrop-blur-xl overflow-hidden">
          {/* Top accent line */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-purple-500/80 to-transparent" />

          <div className="p-10 md:p-16 text-center space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-[#b49bff] uppercase tracking-widest">
                Start building today
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-gray-400 max-w-xl mx-auto">
                If you have an idea that can make a difference, this is your sign to build it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-4 px-10 button-primary text-white font-semibold rounded-xl hover:opacity-90 transition-all border border-[rgba(112,66,248,0.3)] shadow-lg shadow-purple-500/10"
              >
                Get In Touch
                <span className="text-lg">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 py-4 px-10 rounded-xl font-semibold text-gray-300 border border-[rgba(112,66,248,0.25)] hover:border-[rgba(112,66,248,0.5)] hover:text-white transition-all"
              >
                Learn about us
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              Join 400+ followers on LinkedIn · Department of ITE, MAIT
            </p>
          </div>

          {/* Bottom subtle gradient */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
};
