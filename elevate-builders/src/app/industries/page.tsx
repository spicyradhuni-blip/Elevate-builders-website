export const metadata = {
  title: "Industries We Serve",
  description: "Industries supported by Elevate Builders construction subcontracting services in Saudi Arabia.",
};

export default function Industries() {
  const industries = [
    "Commercial & Office",
    "Residential",
    "Hospitality",
    "Industrial",
    "Infrastructure",
    "Institutional",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl text-primary">Industries We Serve</h1>
      <p className="mt-6 text-lg text-foreground/70">
        Our services support projects across a range of sectors common in Saudi Arabia’s construction market.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {industries.map((i) => (
          <div key={i} className="p-6 bg-white border border-border rounded-lg">
            <h3 className="text-lg text-primary">{i}</h3>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-foreground/50">[UPDATE: Add specific project examples or sector focus as verified.]</p>
    </div>
  );
}