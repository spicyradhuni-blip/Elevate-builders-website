export const metadata = {
  title: "About Us",
  description: "About Elevate Builders — a Saudi construction and contracting company delivering Civil, MEP, HVAC, and manpower supply services.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl text-primary">About Elevate Builders</h1>
      <p className="mt-6 text-lg text-foreground/70">
        Elevate Builders is a dynamic construction and contracting company based in Saudi Arabia, delivering reliable and high-quality solutions across Civil, MEP, HVAC, and manpower supply services. We combine engineering expertise, skilled manpower, and strong project management to ensure each project is completed on time, within budget, and to the highest safety and quality standards.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl text-primary">Our Mission</h3>
          <p className="mt-2 text-sm text-foreground/70">
            To deliver enduring, high-quality spaces through purposeful and precise construction. We are guided by an unwavering commitment to integrity, superior craftsmanship, and meaningful impact.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-primary">Our Vision</h3>
          <p className="mt-2 text-sm text-foreground/70">
            To set the standard for excellence within the modern construction industry and define urban skylines with purposeful, innovative developments distinguished by trust, superior quality, and enduring architectural design.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-primary">Our Strength</h3>
          <p className="mt-2 text-sm text-foreground/70">
            Experienced engineers, supervisors, and skilled manpower. Commitment to safety, quality, and client satisfaction. Proven capability to handle projects of all sizes and complexities.
          </p>
        </div>
      </div>

      <h2 className="mt-16 text-2xl text-primary">Licensing & Certifications</h2>
      <ul className="mt-4 space-y-2 text-foreground/80">
        <li>• Commercial Registration (National Number): <strong>7049953909</strong> — Active, Company Limited Liability</li>
        <li>• Riyadh Chamber Membership No. 1131116 (Second Class)</li>
        <li>• ISO 9001:2015 (Quality Management System)</li>
        <li>• ISO 14001:2015 (Environmental Management System)</li>
        <li>• ISO 45001:2018 (Occupational Health & Safety Management System)</li>
        <li>• VAT and Zakat registered</li>
        <li>• GOSI / Nationalization Certificate</li>
        <li>• DCP Approved Applicator (Epoxy Systems)</li>
        <li>• Fosroc Approved Applicator (Industrial Flooring & Protective Coating)</li>
      </ul>

      <h2 className="mt-12 text-2xl text-primary">Registered Address</h2>
      <p className="mt-4 text-foreground/70">
        Building 7756, Prince Abdulaziz Ibn Musaed Ibn Jalawi Street<br />
        Al Murabba District, Riyadh 12612<br />
        Kingdom of Saudi Arabia
      </p>

      <h2 className="mt-12 text-2xl text-primary">Overseas Sister Companies</h2>
      <ul className="mt-4 space-y-2 text-foreground/80 text-sm">
        <li><strong>Tijari Builders Est. 2024</strong> (Bangladesh) — Manpower mobilization support</li>
        <li><strong>ASAT Consulting Engineers</strong> (India) — Engineering solutions</li>
        <li><strong>Lexistruct Consulting Engineers</strong> (India) — Project control, estimation, planning, and contracts</li>
      </ul>
    </div>
  );
}