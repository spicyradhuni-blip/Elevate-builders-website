import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.elevatebuilders.com.sa";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/services/civil`, lastModified: new Date() },
    { url: `${base}/services/mep`, lastModified: new Date() },
    { url: `${base}/services/finishing`, lastModified: new Date() },
    { url: `${base}/services/manpower`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/industries`, lastModified: new Date() },
    { url: `${base}/manpower`, lastModified: new Date() },
    { url: `${base}/careers`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
  ];
}