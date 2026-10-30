# Elevate Builders — Corporate Website

Premium Next.js website for Elevate Builders, a Saudi Arabian construction subcontracting and manpower supply company.

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Server-side form handling (API route)

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Content Updates
- Company details, phone, email, address: update in Footer, Contact page, and About.
- Projects: edit `src/app/projects/page.tsx` or extend with a CMS later.
- Services text: individual pages under `src/app/services/`.
- Logo: replace `public/logo.jpeg` with high-resolution transparent PNG if available.

## Forms
Inquiries post to `/api/inquiry`. Currently logs to console. For production email delivery, integrate Resend (recommended) or another provider using environment variables. See commented code in the API route.

## Deployment
Recommended: Vercel (excellent Next.js support, global edge, free SSL, easy custom domain).

1. Push this repository to GitHub.
2. Import project in Vercel.
3. Set environment variables.
4. Add custom domain `elevatebuilders.com.sa` and `www.elevatebuilders.com.sa`.
5. Configure DNS at your registrar (A/CNAME records as provided by Vercel).

Alternative: self-hosted Node.js on a VPS (DigitalOcean, AWS Lightsail, or Saudi/regional provider).

## Domain Migration Checklist
1. Identify current registrar and hosting.
2. Backup existing site.
3. Record all DNS records (especially MX for email).
4. Confirm email is not dependent on current host.
5. Deploy to new host / Vercel on staging URL.
6. Test forms, pages, mobile.
7. Point DNS (or use Vercel nameservers if transferring).
8. Verify SSL and both www/non-www.
9. Keep old host until confirmed live.
10. Document rollback.

Do not cancel old hosting until the new site is verified.

## Placeholders
All unverified claims (years of experience, certifications, specific projects, numbers) are clearly marked as [UPDATE] or noted as illustrative.

## Arabic Support
Structure supports future Arabic (RTL) addition. Do not publish machine-translated content without professional review.

## License
Private company project.
