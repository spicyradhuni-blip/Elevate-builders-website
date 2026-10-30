export const metadata = {
  title: "Manpower Supply Services",
  description: "Skilled and semi-skilled construction manpower supply for projects across Saudi Arabia.",
};

export default function ManpowerService() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl text-primary">Manpower Supply Services</h1>
      <p className="mt-6 text-lg text-foreground/70">
        We supply skilled and semi-skilled construction workers to support projects throughout the Kingdom of Saudi Arabia.
      </p>

      <h2 className="mt-12 text-2xl text-primary">Workforce Categories</h2>
      <ul className="mt-4 space-y-2 text-foreground/80 list-disc list-inside">
        <li>Civil and structural construction personnel</li>
        <li>MEP technicians and tradespeople</li>
        <li>Finishing and fit-out workers</li>
        <li>General construction manpower</li>
      </ul>

      <p className="mt-6 text-sm text-foreground/60 italic">
        Note: Specific deployment, compliance, and contractual arrangements are subject to project requirements and applicable regulations. Details will be confirmed during quotation.
      </p>

      <div className="mt-12 p-8 bg-muted rounded-lg">
        <h3 className="text-xl text-primary">Manpower Inquiry</h3>
        <a href="/manpower" className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-md text-sm font-medium">Submit Manpower Request</a>
      </div>
    </div>
  );
}