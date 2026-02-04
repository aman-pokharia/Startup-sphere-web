'use client'
import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, ExternalLink, ShieldCheck, Cpu, Globe, Instagram, Layers, Users, ArrowUpRight, Sparkles, Code, Palette, Zap, Share2, BarChart3 } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  accent: string;
  instagram: string;
}

interface TeamGroup {
  title: string;
  members: TeamMember[];
  icon: ReactNode;
}

interface SubDept {
  name: string;
  desc: string;
  details: string;
  members: number;
  color: string;
  glow: string;
  icon: ReactNode;
  bgImage: string;
}

const TeamPage: React.FC = () => {
  const leadershipTeam: TeamMember[] = [
    {
      id: 1,
      name: "Jiya Chugh",
      role: "President",
      bio: "Leading Startup Sphere with vision and innovation, bridging the gap between student potential and market reality.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHpQG9NxWBCWA/profile-displayphoto-shrink_800_800/B56ZPuknIoGsAg-/0/1734874395982?e=1771459200&v=beta&t=3NjZzYbAImtgxg2lJ0AkpBOHztD5w1Ew6_oyDkOIsGg",
      linkedin: "https://www.linkedin.com/in/jiyachugh/",
      instagram: "#",
      accent: "from-purple-500 to-indigo-500"
    }
  ];

  const facultyTeam: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Bhoomi Gupta",
      role: "HOD, ITE",
      bio: "Department Head of Information Technology Engineering with a focus on academic excellence.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQHCVfTXnJzUmA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1643182954113?e=1771459200&v=beta&t=FJrmAIHgMVFxUUsRnHK-xfBABnYLkYSqBWh5gNHGHGg",
      linkedin: "https://www.linkedin.com/in/dr-bhoomi-gupta-3278a734/",
      instagram: "#",
      accent: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Ms. Sapna Gupta",
      role: "Faculty Coordinator",
      bio: "Driving the administrative and mentorship bridge for Startup Sphere initiatives.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE49jaTKP6N7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695826184887?e=1771459200&v=beta&t=Sp7cp4Ii7dyYf2szTBwPgeNwgYFrsrS09-73kHvsYqE",
      linkedin: "https://www.linkedin.com/in/sapna-gupta-7ba94a219/",
      instagram: "#",
      accent: "from-cyan-500 to-teal-500"
    }
  ];

  const coreTeam: TeamMember[] = [
    {
      id: 1,
      name: "Shubham Raj",
      role: "Founder",
      bio: "Driving innovation and entrepreneurship. Building the foundation of the startup ecosystem.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGMM-OnvswwDA/profile-displayphoto-crop_800_800/B56ZpSntCWI4AI-/0/1762322731998?e=1771459200&v=beta&t=o69Tanm_c6KpLH2bestXd9Q29kFoD-ad1De48JI39oA",
      linkedin: "https://www.linkedin.com/in/shubham-raj-62755628b/",
      instagram: "#",
      accent: "from-violet-600 to-purple-600"
    },
    {
      id: 2,
      name: "Kartik",
      role: "Head, Venture Lab",
      bio: "Entrepreneur and mentor guiding student startups from ideation to prototype.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHPvF9dTmUZfA/profile-displayphoto-crop_800_800/B56ZhBV8dSHUAI-/0/1753442929996?e=1771459200&v=beta&t=_fmoM7VeZUe32NXFkjvXOCwE1qhLexWseFUIPwyo7hI",
      linkedin: "https://www.linkedin.com/in/kartik-singh19/",
      instagram: "#",
      accent: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      name: "Shubham Solanki",
      role: "Co-Head, Venture Lab",
      bio: "Judge and mentor for various competitions, specializing in business model validation.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGG51UkVP8aew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732520079133?e=1771459200&v=beta&t=a8n5UUpFJ1P-MaMLM3KK_io3mQMdI3irXpEygNPHq10",
      linkedin: "https://www.linkedin.com/in/shubham-solanki-902331321/",
      instagram: "https://www.instagram.com/the._.solanki_17/",
      accent: "from-emerald-500 to-teal-500"
    },
  ];

  const subDepartments: SubDept[] = [
    { 
      name: "Venture Lab", 
      desc: "Incubating the next generation of student-led startups.", 
      details: "Focuses on MVP development, market testing, and investor readiness. We host weekly pitch sessions and provide 1-on-1 technical mentorship.",
      members: 12,
      color: "text-orange-400",
      glow: "bg-orange-500/10",
      icon: <Code className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Design and Media", 
      desc: "Visual storytelling and branding for our ecosystem.", 
      details: "Handles everything from UI/UX design for incubated startups to creating high-impact promotional films and social media graphics.",
      members: 8,
      color: "text-pink-400",
      glow: "bg-pink-500/10",
      icon: <Palette className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Events & Operations", 
      desc: "Managing the logistics of world-class startup events.", 
      details: "The backbone of our hackathons and networking nights. They ensure seamless execution of large-scale initiatives.",
      members: 15,
      color: "text-blue-400",
      glow: "bg-blue-500/10",
      icon: <Zap className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1505373633560-822492d64022?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Outreach & Collaboration", 
      desc: "Bridging Startup Sphere with the global industry.", 
      details: "Responsible for securing corporate sponsorships, government grants, and university partnerships across the country.",
      members: 6,
      color: "text-green-400",
      glow: "bg-green-500/10",
      icon: <Share2 className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Research & Innovation", 
      desc: "Pushing boundaries with market insights.", 
      details: "Conducts deep-dives into emerging tech trends (AI/Web3) to advise the Venture Lab on high-potential market gaps.",
      members: 5,
      color: "text-purple-400",
      glow: "bg-purple-500/10",
      icon: <BarChart3 className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const teamGroups: TeamGroup[] = [
    { title: "Leadership", members: leadershipTeam, icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Faculty Mentors", members: facultyTeam, icon: <Cpu className="w-6 h-6" /> },
    { title: "The Core", members: coreTeam, icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32 font-sans">
        {/* Hero Section */}
        <div className="text-center mb-24 px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">
              Meet the Visionaries
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 italic leading-[1.1]"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 whitespace-nowrap">ARCHITECTS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide px-4"
          >
            A collective of visionaries, mentors, and builders driving the startup culture at Startup Sphere.
          </motion.p>
        </div>

        {/* Team Sections */}
        <div className="space-y-48">
          {teamGroups.map((group, gIdx) => (
            <section key={gIdx} className="relative">
              <div className="flex items-center gap-4 mb-16">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400">
                  {group.icon}
                </div>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase italic">{group.title}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {group.members.map((member, mIdx) => (
                  <TeamCard key={member.id} member={member} index={mIdx} />
                ))}
              </div>
            </section>
          ))}

          {/* Sub-Departments Section */}
          <section className="relative pt-12">
            <div className="flex items-center gap-4 mb-16">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase italic">Sub-Departments</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {subDepartments.map((dept, idx) => (
                <SubDeptCard key={idx} dept={dept} index={idx} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const SubDeptCard: React.FC<{ dept: SubDept; index: number }> = ({ dept, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group relative overflow-hidden rounded-[2.5rem] border transition-all duration-700 cursor-pointer flex flex-col min-h-[300px]
        ${isExpanded ? 'bg-white/[0.08] border-white/30 shadow-2xl' : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/[0.06]'}`}
    >
      {/* Low Opacity Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={dept.bgImage} 
          alt="" 
          className={`w-full h-full object-cover transition-all duration-1000 grayscale
            ${isExpanded ? 'opacity-15 scale-105' : 'opacity-5 scale-100 group-hover:opacity-10'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/80 via-[#020202]/40 to-[#020202]/90" />
      </div>

      <div className="relative z-10 p-10 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-white/80 group-hover:text-white transition-colors">
            {dept.icon}
          </div>
          <div className={`p-2 rounded-xl transition-all duration-500 ${isExpanded ? 'rotate-45 bg-white text-black scale-110' : 'bg-white/5 text-white/30 group-hover:text-white group-hover:bg-white/10'}`}>
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <div className="mt-auto">
          <h3 className={`text-2xl font-black uppercase italic tracking-tighter mb-2 transition-all duration-300 ${dept.color} ${isExpanded ? 'scale-105 origin-left' : ''}`}>
            {dept.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
             <div className="flex -space-x-1.5 overflow-hidden">
                {[1,2,3].map(i => (
                  <div key={i} className="w-5 h-5 rounded-full border border-black bg-gray-800" />
                ))}
             </div>
             <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
               {dept.members} Members active
             </span>
          </div>

          <p className={`text-gray-400 text-sm leading-relaxed transition-all duration-300 ${isExpanded ? 'text-gray-200' : ''}`}>
            {dept.desc}
          </p>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent my-6" />
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light italic">
                {dept.details}
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all">
                  Get Involved <Sparkles className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Glow highlight */}
      <div className={`absolute top-0 right-0 w-48 h-48 blur-[80px] rounded-full transition-opacity duration-700 -z-10 ${dept.glow} ${isExpanded ? 'opacity-40' : 'opacity-0'}`} />
    </motion.div>
  );
};

const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="group relative cursor-pointer"
    >
      <div className={`relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border transition-all duration-700 
        ${isActive ? 'border-white/40 shadow-2xl scale-[1.02]' : 'border-white/10 bg-[#0a0a0a]'}`}>
        
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover transition-transform duration-1000 
            ${isActive ? 'scale-110 grayscale-0' : 'scale-100 grayscale opacity-60'}`}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-br ${member.accent} 
          ${isActive ? 'opacity-20' : 'opacity-0'}`} />

        <div className="absolute inset-x-0 bottom-0 p-8 z-20">
          <div className="space-y-1">
            <h3 className={`text-2xl font-black italic tracking-tighter transition-all ${isActive ? 'text-white' : 'text-gray-400'}`}>
              {member.name}
            </h3>
            <p className="text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] py-1">
              {member.role}
            </p>
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-4 overflow-hidden"
              >
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                  {member.bio}
                </p>
                <div className="flex items-center gap-3">
                  <a href={member.linkedin} className="p-2.5 rounded-xl bg-white/10 hover:bg-white hover:text-black transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.instagram} className="p-2.5 rounded-xl bg-white/10 hover:bg-white hover:text-black transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamPage;