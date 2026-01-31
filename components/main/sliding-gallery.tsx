"use client";

import Image from "next/image";

const GALLERY_ITEMS = [
  { src: "/projects/project-1.png", label: "Fish Tank 2.0" },
  { src: "/projects/project-2.png", label: "Venture Lab" },
  { src: "/projects/project-3.png", label: "Workshops" },
  { src: "/projects/project-1.png", label: "Community" },
  { src: "/projects/project-2.png", label: "Innovation" },
];

export const SlidingGallery = () => {
  const duplicated = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Moments & Events
        </h2>
        <p className="text-gray-400 mt-2">Highlights from our community</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex flex-nowrap gap-6 animate-slide w-max">
          {duplicated.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
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
