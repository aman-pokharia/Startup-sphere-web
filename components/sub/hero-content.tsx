// @ts-nocheck - framer-motion types incompatible with React 19
"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import InfiniteMenu from '@/components/sub/infinite';

const GALLERY_ITEMS = [
  { src: '/jiya.jpg', label: 'Fish Tank 2.0' },
  { src: '/fem.jpg', label: 'Venture Lab' },
  { src: '/shubh.jpg', label: 'Workshops' },
  { src: '/team.jpg', label: 'Community Meetup' },
  { src: '/plant.jpg', label: 'Innovation Day' },
];

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-28 w-full z-[20]">
      <motion.div
        initial="hidden"
        animate="visible"
        className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start"
      >
        <motion.div variants={slideInFromTop} className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Department of ITE, MAIT – Delhi
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Come into the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              different Sphere
            </span>{" "}
            with Startup Sphere.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Your gateway to entrepreneurial success. We nurture, empower, and accelerate startups with resources, mentorship, and networking. From ideation to execution, we&apos;re here to fuel your journey.
        </motion.p>

        <motion.div variants={slideInFromLeft(1)} className="flex flex-wrap gap-4 mt-2">
          <Link
            href="/about"
            className="group px-8 py-3.5 font-medium text-white rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
          >
            <span className="flex items-center gap-2">
              Learn more
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          <Link
            href="/contact"
            className="group px-8 py-3.5 font-medium text-white rounded-xl border-2 border-purple-500/60 hover:border-cyan-400/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-purple-500/10 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              Join us
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <div className="w-full h-full flex justify-center items-center">
        <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center">
          <div style={{ height: '600px', position: 'relative' }}>
            <InfiniteMenu 
              items={GALLERY_ITEMS.map(item => ({
                image: item.src,
                link: '#',
                title: item.label,
                description: `${item.label} - Startup Sphere Gallery`
              }))}
              scale={1}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
