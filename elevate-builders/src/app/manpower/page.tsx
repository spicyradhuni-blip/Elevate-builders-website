export const metadata = {
  title: "Manpower Solutions",
  description: "Skilled construction manpower supply and workforce solutions across Saudi Arabia.",
};

export default function Manpower() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl text-primary">Manpower Solutions</h1>
      <p className="mt-6 text-lg text-foreground/70">
        Elevate Builders supplies skilled and semi-skilled construction personnel for projects throughout the Kingdom of Saudi Arabia.
      </p>

      <h2 className="mt-10 text-2xl text-primary">Workforce Categories</h2>
      <ul className="mt-4 space-y-1 text-foreground/80 list-disc list-inside">
        <li>Civil and structural workers (steel fixers, shuttering carpenters, masons, etc.)</li>
        <li>MEP technicians and tradespeople</li>
        <li>Finishing and fit-out workers</li>
        <li>General construction manpower and support staff</li>
      </ul>

      <h2 className="mt-10 text-2xl text-primary">Deployment Process</h2>
      <ol className="mt-4 space-y-2 text-foreground/80 list-decimal list-inside">
        <li>Receive project requirements and trade mix</li>
        <li>Confirm availability and suitability</li>
        <li>Coordinate deployment timing with the client</li>
        <li>Support on-site coordination as agreed</li>
      </ol>

      <p className="mt-6 text-sm italic text-foreground/60">
        Specific compliance, documentation, and contractual terms are confirmed during the inquiry process. We do not make unsupported claims regarding visas, recruitment licenses, or guarantees.
      </p>

      <div className="mt-12 p-8 bg-muted rounded-lg">
        <h3 className="text-xl text-primary">Submit Manpower Inquiry</h3>
        <form action="/api/inquiry" method="POST" className="mt-4 space-y-4">
          <input name="name" required placeholder="Name" className="w-full border rounded-md px-4 py-3 text-sm" />
          <input name="email" type="email" required placeholder="Email" className="w-full border rounded-md px-4 py-3 text-sm" />
          <textarea name="message" required placeholder="Trade requirements, number of personnel, project location, duration..." rows={4} className="w-full border rounded-md px-4 py-3 text-sm" />
          <input type="hidden" name="type" value="manpower" />
          <button className="bg-primary text-white px-6 py-3 rounded-md text-sm">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
}