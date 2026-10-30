export const metadata = {
  title: "Projects",
  description: "Selected projects and capabilities of Elevate Builders across civil, MEP, finishing, and infrastructure works in Saudi Arabia.",
};

export default function Projects() {
  const projects = [
    {
      title: "Water Transmission Pipeline",
      client: "Petroleum Vision Contracting Company (Petro-V)",
      location: "Dammam, Eastern Province",
      scope: "Installation",
      status: "Completed",
    },
    {
      title: "MV-Culvert Epoxy Coating",
      client: "AL-AYUNI Investment & Contracting Co.",
      location: "Riyadh (DG-II Infra, Package-1)",
      scope: "Epoxy Coating Supply and Apply",
      status: "Completed",
    },
    {
      title: "Telecommunication Works",
      client: "Telecommunications Consultants India Limited (TCIL)",
      location: "Dammam, Eastern Province",
      scope: "Installation",
      status: "Completed",
    },
    {
      title: "Diriyah Gate Infrastructure",
      client: "Asloob Bedaa / Salini Saudi Arabia",
      location: "Diriyah, Riyadh",
      scope: "Civil Construction / MV-Culvert",
      status: "Completed",
    },
    {
      title: "PPP4 Facilities for Almarai",
      client: "Shadha Al Ammar Co. (Main Client: Almarai)",
      location: "Saudi Arabia",
      scope: "Parking, Fuel Station, Inspection & Wash Bay",
      status: "Completed (2025–2026)",
    },
    {
      title: "Avenue Mall Finishing Works",
      client: "Advance Technologies Valley (Main Client: Nesma & Partners)",
      location: "Saudi Arabia",
      scope: "Finishing / Fit-out related works",
      status: "Completed",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl text-primary">Projects</h1>
      <p className="mt-4 text-foreground/70 max-w-2xl">
        Selected completed works drawn from Elevate Builders’ company profile. Project details are presented as recorded; additional verified projects and photographs can be added as they become available.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((p) => (
          <div key={p.title} className="bg-white border border-border rounded-lg p-6">
            <p className="text-xs text-accent uppercase tracking-wider">{p.status}</p>
            <h3 className="text-lg text-primary mt-1">{p.title}</h3>
            <p className="text-sm text-foreground/70 mt-2"><strong>Client:</strong> {p.client}</p>
            <p className="text-sm text-foreground/60 mt-1"><strong>Location:</strong> {p.location}</p>
            <p className="text-sm text-foreground/60 mt-1"><strong>Scope:</strong> {p.scope}</p>
          </div>
        ))}
      </div>
    </div>
  );
}