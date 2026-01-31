import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/footer.module.css";

const FOOTER_COLUMNS = [
  {
    heading: "PRODUCTS",
    links: [
      { name: "Apps", href: "#" },
      { name: "Workflows", href: "#" },
      { name: "Database", href: "#" },
      { name: "Mobile", href: "#" },
    ],
  },
  {
    heading: "SOLUTIONS",
    links: [
      { name: "AI apps", href: "#" },
      { name: "External apps", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Self-hosting", href: "#" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { name: "Blog", href: "#" },
      { name: "Reports", href: "#" },
    ],
  },
  {
    heading: "DEVELOPERS",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Status", href: "#" },
      { name: "Developer Network", href: "#" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#08080a]">
      {/* CTA section - joined with footer */}
      <section className="w-full px-4 md:px-8 py-16 md:py-20 bg-[#08080a]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-400">
              If you have an idea that can make a difference, this is your sign to build it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://www.linkedin.com/company/startups-sphere/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-all shadow-[0_0_24px_rgba(255,255,255,0.15)]"
            >
              Join Community
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-white/80 text-white text-sm font-semibold hover:bg-white/5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.08)]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Glowing white separator line */}
      <div className="w-full relative py-1">
        <div
          className="w-full h-[2px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.15) 80%, transparent 100%)",
            boxShadow: "0 0 24px 2px rgba(255,255,255,0.35), 0 0 48px 4px rgba(255,255,255,0.15)",
          }}
        />
      </div>

      {/* Footer content - layout like image */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Upper row: 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 mb-16 md:mb-20">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {column.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Lower row: logo left, CTAs + legal right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pt-8 border-t border-white/5">
          {/* Brand Name - Cool large text design */}
          <Link href="/" className="shrink-0 group">
            <div className={styles.brandContainer}>
              <h2 className={`${styles.coolText} ${styles.startupText}`}>
                Startup
              </h2>
              <div className={styles.logoContainer}>
                <Image
                  src="/logo69.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className={styles.logo}
                  priority
                />
                <h2 className={`${styles.coolText} ${styles.sphereText}`}>
                  Sphere
                </h2>
              </div>
            </div>
          </Link>

          {/* Right: CTA buttons + legal + copyright */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://www.linkedin.com/company/startups-sphere/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                START FOR FREE
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-400 text-gray-300 text-sm font-semibold hover:border-white hover:text-white transition-colors"
              >
                BOOK A DEMO
              </Link>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500">
                <Link href="#" className="hover:text-gray-400 transition-colors">
                  TERMS OF USE
                </Link>
                <Link href="#" className="hover:text-gray-400 transition-colors">
                  PRIVACY POLICY
                </Link>
                <Link href="#" className="hover:text-gray-400 transition-colors">
                  SECURITY
                </Link>
              </div>
              <p className="text-xs text-gray-500">
                © STARTUP SPHERE {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
