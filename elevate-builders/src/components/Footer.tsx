import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Image src="/logo.jpeg" alt="Elevate Builders" width={140} height={42} className="h-10 w-auto object-contain brightness-0 invert mb-4" />
            <p className="text-sm text-white/70 leading-relaxed">
              Construction subcontracting and manpower supply services across the Kingdom of Saudi Arabia.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/services/civil" className="hover:text-white">Civil & Structural</Link></li>
              <li><Link href="/services/mep" className="hover:text-white">MEP Subcontracting</Link></li>
              <li><Link href="/services/finishing" className="hover:text-white">Finishing & Fit-Out</Link></li>
              <li><Link href="/services/manpower" className="hover:text-white">Manpower Supply</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-accent">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-accent">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Al Murabba District, Riyadh 12612<br />Kingdom of Saudi Arabia</li>
              <li><a href="mailto:info@elevatebuilders.com.sa" className="hover:text-white">info@elevatebuilders.com.sa</a></li>
              <li><a href="tel:+966XXXXXXXXX" className="hover:text-white">+966 XX XXX XXXX</a></li>
              <li className="text-xs pt-2">CR: 7049953909</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} Elevate Builders. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}