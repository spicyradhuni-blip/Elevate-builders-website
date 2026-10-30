export const metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-sm">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>Elevate Builders respects your privacy. Information submitted through inquiry forms is used solely to respond to your request and for related business communication.</p>
      <p>We do not sell personal data. Contact forms are protected against basic spam. For questions, email info@elevatebuilders.com.sa.</p>
      <p className="text-sm italic">[UPDATE: Full privacy policy aligned with Saudi regulations and data practices.]</p>
    </div>
  );
}