import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="h-full w-full min-h-screen pt-24 pb-20 px-10">
      <div className="max-w-4xl m-auto flex flex-col gap-12">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Contact
        </h1>

        <section className="flex flex-col gap-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            Get in touch with Startup Sphere – we&apos;d love to hear from you. Whether you want to join our community, partner with us, or learn more about our events and initiatives, reach out through the channels below.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-medium text-white mb-2">Location</h2>
              <p className="text-gray-300">
                Department of ITE, Maharaja Agrasen Institute of Technology (MAIT)
                <br />
                Delhi, India
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-2">Connect with us</h2>
              <Link
                href="https://www.linkedin.com/company/startups-sphere/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#b49bff] hover:text-purple-400 transition"
              >
                LinkedIn – Startup Sphere
              </Link>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-2">Follow us</h2>
              <p className="text-gray-300">
                Follow our LinkedIn page for updates on events, workshops, and success stories from our community.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
