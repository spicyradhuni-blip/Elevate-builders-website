export const metadata = {
  title: "Careers",
  description: "Careers and recruitment inquiries at Elevate Builders.",
};

export default function Careers() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl text-primary">Careers</h1>
      <p className="mt-6 text-foreground/70">
        We welcome inquiries from experienced construction professionals and tradespeople interested in opportunities with Elevate Builders.
      </p>
      <p className="mt-4 text-foreground/70">
        Please send your CV and a brief introduction to <a href="mailto:careers@elevatebuilders.com.sa" className="text-primary hover:underline">careers@elevatebuilders.com.sa</a> or use the contact form.
      </p>
      <p className="mt-8 text-sm italic text-foreground/50">
        Application process and open positions will be updated as recruitment needs are confirmed. Privacy of personal data is respected.
      </p>
    </div>
  );
}