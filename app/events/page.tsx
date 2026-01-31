export default function EventsPage() {
  return (
    <main className="h-full w-full min-h-screen pt-24 pb-20 px-10">
      <div className="max-w-4xl m-auto flex flex-col gap-12">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Events
        </h1>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-white">Fish Tank 2.0</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our flagship pitching competition – where creativity meets courage, mentorship meets guidance, and ideas meet opportunity. Participants didn&apos;t just pitch ideas; they brought solutions, passion, and vision to the table. Each presentation was a glimpse into the future of innovation.
          </p>
          <p className="text-gray-400">
            Distinguished jury and mentors provided invaluable insights. Growth happens when ideas are challenged, guidance is given, and collaboration takes place.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-white">Canva Basics Workshop</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            An exclusive learning session for our members – a hands-on class designed to help you create impactful posters, presentations, and social media creatives from scratch. No prior design experience required – just enthusiasm and creativity!
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-white">Venture Lab & Campus Ventures</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            From campus idea to platform – we support and celebrate ventures like CampusMart and other student-led initiatives that are shaping the future through creativity, courage, and collaboration. If you have an idea that can make a difference, we&apos;re here to help you build it.
          </p>
        </section>
      </div>
    </main>
  );
}
