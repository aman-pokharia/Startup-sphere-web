"use client";

import Image from "next/image";

const GALLERY_ITEMS = [
  { src: "/jiya.jpg", label: "Fish Tank 2.0" },
  { src: "/fem.jpg", label: "Venture Lab" },
  { src: "/shubh.jpg", label: "Workshops" },
  { src: "/team.jpg", label: "Community Meetup" },
  { src: "/plant.jpg", label: "Innovation Day" },
];

const GALLERY_ITEMS_REVERSE = [
  { src: "/shubh.jpg", label: "Tech Workshop" },
  { src: "/team.jpg", label: "Team Building" },
  { src: "/plant.jpg", label: "Hackathon" },
  { src: "/jiya.jpg", label: "Networking Event" },
  { src: "/fem.jpg", label: "Startup Pitch" },
];

export const SlidingGallery = () => {
  const duplicated = [...GALLERY_ITEMS, ...GALLERY_ITEMS];
  const duplicatedReverse = [...GALLERY_ITEMS_REVERSE, ...GALLERY_ITEMS_REVERSE];

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Moments & Events
        </h2>
        <p className="text-gray-400 mt-2">Highlights from our community</p>
      </div>
      
      {/* First Slider - Moving Left */}
      <div className="relative overflow-hidden mb-8">
        <div className="flex flex-nowrap gap-6 animate-slide w-max">
          {duplicated.map((item, i) => (
            <div
              key={`left-${item.label}-${i}`}
              className="flex-shrink-0 w-[280px] md:w-[340px] group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[rgba(112,66,248,0.2)] bg-[rgba(3,0,20,0.4)]">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-medium">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Second Slider - Moving Right */}
      <div className="relative overflow-hidden">
        <div className="flex flex-nowrap gap-6 animate-slide-reverse w-max">
          {duplicatedReverse.map((item, i) => (
            <div
              key={`right-${item.label}-${i}`}
              className="flex-shrink-0 w-[280px] md:w-[340px] group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[rgba(112,66,248,0.2)] bg-[rgba(3,0,20,0.4)]">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-medium">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
