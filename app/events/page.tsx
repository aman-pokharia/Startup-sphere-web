import React, { useState, useRef, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Palette,
  Lightbulb,
  Users,
  Sparkles,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";


interface EventItem {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  date: string;
  location: string;
  category: string;
  accent: string;
  icon: ReactNode;
}

const EventsPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const events: EventItem[] = [
    {
      id: 1,
      title: "Fish Tank 2.0",
      description:
        "Our flagship pitching competition – where creativity meets courage, mentorship meets guidance, and ideas meet opportunity. Participants didn't just pitch ideas; they brought solutions, passion, and vision to the table.",
      details:
        "Distinguished jury and mentors provided invaluable insights. Growth happens when ideas are challenged.",
      image: "/jiya.jpg",
      date: "March 15, 2024",
      location: "MAIT Auditorium",
      category: "Competition",
      accent: "from-purple-500 to-blue-500",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Canva Basics Workshop",
      description:
        "An exclusive learning session for our members – a hands-on class designed to help you create impactful posters, presentations, and social media creatives from scratch.",
      details:
        "No prior design experience required. Focused on visual storytelling for startup founders.",
      image: "/fem.jpg",
      date: "April 3, 2024",
      location: "Design Studio",
      category: "Workshop",
      accent: "from-pink-500 to-rose-500",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Venture Lab & Campus Ventures",
      description:
        "From campus idea to platform – we support student-led initiatives like CampusMart that are shaping the future through creativity and courage.",
      details:
        "Our ecosystem provides the resources and network to help you build it from the ground up.",
      image: "/blue.jpg",
      date: "May 20, 2024",
      location: "Innovation Hub",
      category: "Incubation",
      accent: "from-amber-400 to-orange-600",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Startup Pitch Night",
      description:
        "An evening of innovation where emerging startups showcase their groundbreaking ideas to industry experts and potential investors.",
      details:
        "Multiple startups presented their ideas with live Q&A sessions and networking opportunities.",
      image: "/shubh.jpg",
      date: "June 10, 2024",
      location: "Entrepreneur Center",
      category: "Networking",
      accent: "from-cyan-400 to-blue-600",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#020202] text-white selection:bg-purple-500/30 overflow-x-hidden font-sans"
    >
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.05), transparent 80%)`,
        }}
      />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
              Milestones of Innovation
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">
            EVENTS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              & SPHERE
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Witness the evolution of entrepreneurship. From first pitches to
            full-scale ventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

interface EventCardProps {
  event: EventItem;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]"
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

        <div className="absolute top-6 left-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
            <span className="text-purple-400">{event.icon}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-white">
              {event.category}
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <motion.h3 className="text-4xl font-black tracking-tighter italic uppercase">
            {event.title}
          </motion.h3>
        </div>
      </div>

      <div className="p-8 pt-4 space-y-6">
        <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-purple-500" />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-cyan-500" />
            {event.location}
          </div>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed font-light">
          {event.description}
        </p>

        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
          <div
            className={`p-4 rounded-2xl bg-gradient-to-r ${event.accent}/10 border-l-4 border-purple-500`}
          >
            <p className="text-sm text-gray-300 italic">"{event.details}"</p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <Link 
            href={`/gallery?event=${event.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            View Gallery
          </Link>
          <button className="px-6 py-3 border border-white/10 rounded-xl font-bold text-xs hover:bg-white/5 transition-all text-white uppercase tracking-widest">
            CASE STUDY
          </button>
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${event.accent} opacity-0 blur-3xl group-hover:opacity-20 transition-opacity`}
      />
    </motion.div>
  );
};

export default EventsPage;