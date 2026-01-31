export default function TeamPage() {
  return (
    <main className="h-full w-full min-h-screen pt-24 pb-20 px-10">
      <div className="max-w-4xl m-auto flex flex-col gap-12">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Team
        </h1>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-white">Leadership</h2>
          <p className="text-lg text-gray-300">
            <span className="text-[#b49bff]">Jiya Chugh</span> – President, Startup Sphere
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-white">Faculty &amp; College Authorities</h2>
          <ul className="text-lg text-gray-300 space-y-2">
            <li>Dr. Bhoomi Gupta – HOD, ITE</li>
            <li>Ms. Sapna Gupta – Faculty Coordinator, ITE</li>
            <li>Ms. Ruchi Bhatt</li>
            <li>Mr. Varun Goel</li>
            <li>Mr. Pawan Sharma</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-white">Judges &amp; Mentors (Fish Tank 2.0)</h2>
          <ul className="text-lg text-gray-300 space-y-2">
            <li>Mr. Pratham Batra – Co-Founder, Geek Room</li>
            <li>Mr. Sanidhya Goel – Hackathons Winner, Judge, Mentor</li>
            <li>Mr. Sourav Bera – Software Engineer, Microsoft</li>
            <li>Mr. Ansh Vashistha – Co-Founder, QuickReel</li>
            <li>Mr. Jai Chawla – Founder, HackShastra</li>
            <li>Mr. Shubham Raj – Co-Head Venture Lab</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-white">Core Team</h2>
          <p className="text-lg text-gray-300">
            Our vibrant community of student leaders and members who drive events, mentorship, and innovation at Startup Sphere – Department of ITE, Maharaja Agrasen Institute of Technology, Delhi.
          </p>
        </section>
      </div>
    </main>
  );
}
