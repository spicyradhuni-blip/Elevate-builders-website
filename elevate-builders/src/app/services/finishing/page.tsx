export const metadata = {
  title: "Finishing & Interior Fit-Out",
  description: "Complete interior finishing and fit-out packages for commercial, residential, and hospitality projects in Saudi Arabia.",
};

export default function Finishing() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl text-primary">Finishing & Interior Fit-Out</h1>
      <p className="mt-6 text-lg text-foreground/70">
        Elevate Builders delivers complete interior finishing packages and fit-out works for commercial, residential, and hospitality projects.
      </p>

      <h2 className="mt-12 text-2xl text-primary">Service Categories</h2>
      <ul className="mt-4 space-y-2 text-foreground/80 list-disc list-inside">
        <li>Complete interior finishing packages</li>
        <li>Commercial and office fit-outs</li>
        <li>Residential and hospitality fit-outs</li>
        <li>Partitions, ceilings, flooring, painting, and decorative finishing</li>
      </ul>

      <p className="mt-6 text-foreground/70">
        Scope is tailored to each project’s requirements and coordinated with the main contractor’s program.
      </p>

      <div className="mt-12 p-8 bg-muted rounded-lg">
        <h3 className="text-xl text-primary">Request a Quotation</h3>
        <a href="/contact#quotation" className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-md text-sm font-medium">Request Quotation</a>
      </div>
    </div>
  );
}