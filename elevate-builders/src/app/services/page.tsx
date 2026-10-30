import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "Civil, MEP, finishing & fit-out subcontracting and manpower supply services by Elevate Builders across Saudi Arabia.",
};

const services = [
  { title: "Civil & Structural Works", href: "/services/civil", desc: "Concrete, structural, and infrastructure packages." },
  { title: "MEP Subcontracting", href: "/services/mep", desc: "Mechanical, electrical, and plumbing works." },
  { title: "Finishing & Interior Fit-Out", href: "/services/finishing", desc: "Complete interior finishing and fit-out packages." },
  { title: "Manpower Supply", href: "/services/manpower", desc: "Skilled and semi-skilled construction workforce." },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl text-primary">Our Services</h1>
      <p className="mt-6 text-lg text-foreground/70 max-w-3xl">
        Elevate Builders delivers specialist subcontracting packages and workforce solutions to main contractors and project owners throughout the Kingdom of Saudi Arabia.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="block p-8 bg-white border border-border rounded-lg hover:shadow-md transition-shadow">
            <h2 className="text-2xl text-primary">{s.title}</h2>
            <p className="mt-2 text-foreground/70">{s.desc}</p>
            <span className="inline-block mt-4 text-accent text-sm font-medium">View details →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}