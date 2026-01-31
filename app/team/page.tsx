import Image from "next/image";

export default function TeamPage() {
  const leadershipTeam = [
    {
      id: 1,
      name: "Jiya Chugh",
      role: "President",
      bio: "Leading Startup Sphere with vision and innovation",
      image: "/jiya.jpg",
      linkedin: "#"
    }
  ];

  const facultyTeam = [
    {
      id: 1,
      name: "Dr. Bhoomi Gupta",
      role: "HOD, ITE",
      bio: "Department Head of Information Technology Engineering",
      image: "/.jpg",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Ms. Sapna Gupta",
      role: "Faculty Coordinator",
      bio: "Faculty coordinator for Startup Sphere",
      image: "/.jpg",
      linkedin: "#"
    }
  ];

  const coreTeam = [
    {
      id: 1,
      name: "Shubham Raj",
      role: "Founder",
      bio: "Driving innovation and entrepreneurship",
      image: "/shubh.jpg",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Kartik",
      role: "Head, Venture Lab",
      bio: "Entrepreneur and mentor",
      image: "/.jpg",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Shubham Solanki",
      role: "Co-Head, Venture Lab",
      bio: "Judge and mentor for various competitions",
      image: "/.jpg",
      linkedin: "#"
    },
  ];

  const teamGroups = [
    {
      title: "Leadership",
      members: leadershipTeam
    },
    {
      title: "Faculty Team",
      members: facultyTeam
    },
    {
      title: "Core Team",
      members: coreTeam
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Our Team
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation and entrepreneurship
          </p>
        </div>

        <div className="space-y-16">
          {teamGroups.map((group, index) => (
            <section key={index} className="space-y-8">
              <h2 className="text-3xl font-bold text-white border-l-4 border-purple-500 pl-4">
                {group.title}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.members.map((member) => (
                  <div 
                    key={member.id}
                    className="bg-gradient-to-br from-[rgba(3,0,20,0.5)] to-[rgba(112,66,248,0.15)] border border-[rgba(112,66,248,0.2)] rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-[0_0_40px_rgba(113,47,255,0.2)] transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-purple-400 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                      
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
