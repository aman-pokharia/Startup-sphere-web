import { Hero } from "@/components/main/hero";
import { IdeationSection } from "@/components/main/ideation-section";
import { Projects } from "@/components/main/projects";
import { SlidingGallery } from "@/components/main/sliding-gallery";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <IdeationSection />
        <SlidingGallery />
        <Projects />
        
      </div>
    </main>
  );
}
