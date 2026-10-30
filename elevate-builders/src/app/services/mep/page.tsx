export const metadata = {
  title: "MEP Subcontracting",
  description: "Mechanical, electrical, and plumbing subcontracting and installation services in Saudi Arabia.",
};

export default function MEP() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl text-primary">MEP Subcontracting</h1>
      <p className="mt-6 text-lg text-foreground/70">
        We provide MEP installation, coordination, and related site activities for building projects, supporting main contractors with mechanical, electrical, and plumbing packages.
      </p>

      <h2 className="mt-12 text-2xl text-primary">Service Categories</h2>
      <ul className="mt-4 space-y-2 text-foreground/80 list-disc list-inside">
        <li>Mechanical works</li>
        <li>Electrical works</li>
        <li>Plumbing and associated building services</li>
        <li>MEP installation and coordination</li>
      </ul>

      <h2 className="mt-10 text-2xl text-primary">Typical Scope</h2>
      <p className="mt-4 text-foreground/70">
        Installation of systems according to approved drawings and specifications, coordination with other trades, and support for testing and commissioning processes as required by the main contractor.
      </p>

      <div className="mt-12 p-8 bg-muted rounded-lg">
        <h3 className="text-xl text-primary">Request a Quotation</h3>
        <a href="/contact#quotation" className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-md text-sm font-medium">Request Quotation</a>
      </div>
    </div>
  );
}