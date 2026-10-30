import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-6xl text-primary">404</h1>
        <p className="mt-4 text-lg text-foreground/70">Page not found</p>
        <Link href="/" className="inline-block mt-6 text-primary underline">Return home</Link>
      </div>
    </div>
  );
}