import Link from "next/link";
import Image from "next/image";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Fish Tank 2.0",
      description: "Our flagship pitching competition – where creativity meets courage, mentorship meets guidance, and ideas meet opportunity. Participants didn't just pitch ideas; they brought solutions, passion, and vision to the table. Each presentation was a glimpse into the future of innovation.",
      details: "Distinguished jury and mentors provided invaluable insights. Growth happens when ideas are challenged, guidance is given, and collaboration takes place.",
      image: "/projects/project-1.png",
      date: "March 15, 2024",
      location: "MAIT Auditorium"
    },
    {
      id: 2,
      title: "Canva Basics Workshop",
      description: "An exclusive learning session for our members – a hands-on class designed to help you create impactful posters, presentations, and social media creatives from scratch. No prior design experience required – just enthusiasm and creativity!",
      details: "",
      image: "/projects/project-2.png",
      date: "April 3, 2024",
      location: "Design Studio"
    },
    {
      id: 3,
      title: "Venture Lab & Campus Ventures",
      description: "From campus idea to platform – we support and celebrate ventures like CampusMart and other student-led initiatives that are shaping the future through creativity, courage, and collaboration. If you have an idea that can make a difference, we're here to help you build it.",
      details: "",
      image: "/projects/project-3.png",
      date: "May 20, 2024",
      location: "Innovation Hub"
    },
    {
      id: 4,
      title: "Startup Pitch Night",
      description: "An evening of innovation where emerging startups showcase their groundbreaking ideas to industry experts and potential investors. A platform for visionary entrepreneurs to share their journey and connect with the startup ecosystem.",
      details: "Multiple startups presented their ideas with live Q&A sessions and networking opportunities.",
      image: "/team.jpg",
      date: "June 10, 2024",
      location: "Entrepreneur Center"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Events & Activities
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our vibrant community events and memorable moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-gradient-to-br from-[rgba(3,0,20,0.5)] to-[rgba(112,66,248,0.15)] border border-[rgba(112,66,248,0.2)] rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-[0_0_40px_rgba(113,47,255,0.2)] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{event.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-3">{event.description}</p>
                {event.details && (
                  <p className="text-gray-400 text-sm">{event.details}</p>
                )}
                
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link 
                    href={`/gallery?event=${event.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    View Gallery
                  </Link>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800/50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
