import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Civil & Structural Works",
      desc: "Concrete, structural, and infrastructure subcontracting packages for main contractors.",
      href: "/services/civil",
    },
    {
      title: "MEP Subcontracting",
      desc: "Mechanical, electrical, and plumbing installation and coordination services.",
      href: "/services/mep",
    },
    {
      title: "Finishing & Fit-Out",
      desc: "Interior finishing packages for commercial, residential, and hospitality projects.",
      href: "/services/finishing",
    },
    {
      title: "Manpower Supply",
      desc: "Skilled and semi-skilled construction workforce deployed across Saudi Arabia.",
      href: "/services/manpower",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
            alt="Modern architectural structure"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">Kingdom of Saudi Arabia</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight max-w-3xl">
            Construction Subcontracting & Manpower Solutions
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Elevate Builders supports main contractors, developers, and project owners with reliable civil, MEP, finishing works, and skilled workforce supply across the Kingdom.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact#quotation"
              className="bg-accent text-primary px-8 py-4 rounded-md font-medium text-center hover:bg-white transition-colors"
            >
              Request a Quotation
            </Link>
            <Link
              href="/services"
              className="border border-white/40 text-white px-8 py-4 rounded-md font-medium text-center hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl text-primary">Reliable Partner for Construction Projects</h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Elevate Builders is a Saudi Arabian construction subcontracting and workforce supply company. We provide specialist packages and manpower to main contractors executing projects throughout the Kingdom.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Our focus is on quality execution, coordination, safety awareness, and the ability to support projects of varying scale with civil, MEP, finishing, and workforce capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-primary mb-12">Our Principal Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group bg-white p-8 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <h3 className="text-xl text-primary mb-3 group-hover:text-primary-light">{s.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-4 text-sm text-accent font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-primary mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl text-primary mb-3">Coordination & Delivery</h3>
              <p className="text-foreground/70">We work closely with main contractors to understand package requirements, coordinate interfaces, and deliver according to project schedules.</p>
            </div>
            <div>
              <h3 className="text-xl text-primary mb-3">Quality & Safety</h3>
              <p className="text-foreground/70">Emphasis on workmanship standards, site safety awareness, and clear communication throughout execution.</p>
            </div>
            <div>
              <h3 className="text-xl text-primary mb-3">Workforce Capability</h3>
              <p className="text-foreground/70">Ability to supply skilled and semi-skilled personnel matched to civil, MEP, and finishing requirements across Saudi Arabia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Serving Projects Across the Kingdom</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From Riyadh and the Central Region to the Eastern Province, Jeddah, and major development areas — Elevate Builders supports construction activity throughout Saudi Arabia.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-primary">Ready to Discuss Your Project?</h2>
          <p className="mt-4 text-foreground/70">Submit a quotation request and our team will respond with the information needed to support your requirements.</p>
          <Link href="/contact#quotation" className="inline-block mt-8 bg-primary text-white px-8 py-4 rounded-md font-medium hover:bg-primary-light transition-colors">
            Request a Quotation
          </Link>
        </div>
      </section>
    </>
  );
}