import {
  AcademicCapIcon,
  LightBulbIcon,
  CubeTransparentIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <main className="h-full w-full min-h-screen pt-28 pb-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Hero */}
        <section className="text-center space-y-4">
          <div className="Welcome-box py-[10px] px-[14px] border border-[#7042f88b] opacity-[0.9] w-fit mx-auto">
            <p className="Welcome-text text-[13px] font-medium">
              Department of ITE · MAIT
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            About Startup Sphere
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Empowering the next generation of entrepreneurs
          </p>
        </section>

        {/* Welcome */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <span className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500" />
            Welcome to Startup Sphere
          </h2>
          <div className="rounded-2xl border border-[rgba(112,66,248,0.2)] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm p-6 md:p-8 space-y-5">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to the Startup Sphere Society at ITE MAIT College – your gateway to entrepreneurial success! Join our vibrant community where we nurture, empower, and accelerate startups, providing invaluable resources, mentorship, and networking opportunities.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From ideation to execution, we&apos;re here to fuel your journey and transform ideas into thriving businesses. Let&apos;s innovate, collaborate, and shape the future together!
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[rgba(112,66,248,0.2)] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-[rgba(112,66,248,0.35)] transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[rgba(112,66,248,0.15)]">
                <LightBulbIcon className="w-6 h-6 text-[#b49bff]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To create a thriving ecosystem that supports student entrepreneurs at every stage of their journey, from initial ideation to successful business launch. We believe in empowering students with the knowledge, skills, and networks needed to turn their innovative ideas into reality.
            </p>
          </div>
          <div className="rounded-2xl border border-[rgba(112,66,248,0.2)] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-[rgba(112,66,248,0.35)] transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[rgba(34,211,238,0.15)]">
                <CubeTransparentIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To be the leading student entrepreneurship society that produces successful startups and innovative leaders who make a positive impact on society. We envision a future where every student with a great idea has the support and resources to bring it to life.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <span className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500" />
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Mentorship Programs",
                desc: "Connect with experienced entrepreneurs, industry experts, and successful founders who provide guidance and insights to help you navigate your startup journey.",
              },
              {
                title: "Networking Opportunities",
                desc: "Build valuable connections with fellow entrepreneurs, investors, and industry professionals through our events and community activities.",
              },
              {
                title: "Skill Development Workshops",
                desc: "Participate in hands-on workshops covering design, marketing, business strategy, and technical skills that are essential for startup success.",
              },
              {
                title: "Pitching Competitions",
                desc: "Showcase your ideas and receive valuable feedback from judges and mentors at our flagship events like Fish Tank.",
              },
              {
                title: "Resources & Support",
                desc: "Access to tools, templates, and resources that help you build and grow your startup, along with ongoing support from our community.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="group rounded-xl border border-[rgba(112,66,248,0.18)] bg-[rgba(3,0,20,0.4)] backdrop-blur-sm p-5 flex flex-col gap-3 hover:border-[rgba(112,66,248,0.35)] hover:bg-[rgba(3,0,20,0.6)] transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(112,66,248,0.2)] flex items-center justify-center text-[#b49bff]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white group-hover:text-[#b49bff] transition-colors">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed mt-1">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Department Information */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <span className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500" />
            Department Information
          </h2>
          <div className="rounded-2xl border border-[rgba(112,66,248,0.2)] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[rgba(112,66,248,0.15)]">
                  <BuildingOffice2Icon className="w-5 h-5 text-[#b49bff]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Department</p>
                  <p className="text-gray-200 font-medium">Information Technology Engineering (ITE)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[rgba(112,66,248,0.15)]">
                  <AcademicCapIcon className="w-5 h-5 text-[#b49bff]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">College</p>
                  <p className="text-gray-200 font-medium">Maharaja Agrasen Institute of Technology (MAIT)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[rgba(112,66,248,0.15)]">
                  <MapPinIcon className="w-5 h-5 text-[#b49bff]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-gray-200 font-medium">Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[rgba(112,66,248,0.15)]">
                  <CalendarIcon className="w-5 h-5 text-[#b49bff]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Founded</p>
                  <p className="text-gray-200 font-medium">2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline */}
        <section className="text-center">
          <div className="Welcome-box py-[10px] px-[14px] border border-[#7042f88b] opacity-[0.9] w-fit mx-auto">
            <p className="Welcome-text text-[13px]">
              #StartupMAIT #InnovationHub #Entrepreneurship
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
