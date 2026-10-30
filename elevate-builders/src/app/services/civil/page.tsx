export const metadata = {
  title: "Civil & Structural Works",
  description: "Civil and structural subcontracting services including concrete works and infrastructure support across Saudi Arabia.",
};

export default function Civil() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl text-primary">Civil & Structural Works</h1>
      <p className="mt-6 text-lg text-foreground/70">
        Elevate Builders undertakes civil and structural subcontracting packages for main contractors on commercial, residential, industrial, and infrastructure projects across the Kingdom.
      </p>

      <h2 className="mt-12 text-2xl text-primary">Service Categories</h2>
      <ul className="mt-4 space-y-2 text-foreground/80 list-disc list-inside">
        <li>Civil construction and structural works</li>
        <li>Concrete works and related activities</li>
        <li>Civil infrastructure and associated site works</li>
        <li>Specialist subcontracting packages according to project requirements</li>
      </ul>

      <h2 className="mt-10 text-2xl text-primary">Typical Scope</h2>
      <p className="mt-4 text-foreground/70">
        Scope is defined per project and may include formwork, reinforcement, concrete placement, structural elements, and related site works. We coordinate with the main contractor’s program and interfaces.
      </p>

      <h2 className="mt-10 text-2xl text-primary">How We Support Main Contractors</h2>
      <p className="mt-4 text-foreground/70">
        We provide dedicated teams, clear communication on progress and constraints, and focus on delivering packages that integrate with overall project requirements.
      </p>

      <div className="mt-12 p-8 bg-muted rounded-lg">
        <h3 className="text-xl text-primary">Request a Quotation</h3>
        <p className="mt-2 text-sm text-foreground/70">Provide project details and we will respond with the information needed to support your civil package.</p>
        <a href="/contact#quotation" className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-md text-sm font-medium">Request Quotation</a>
      </div>
    </div>
  );
}