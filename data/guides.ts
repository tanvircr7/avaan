export type Guide = {
  slug: string;
  title: string;
  description: string;
  content: string[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-choose-wifi-7-router",
    title: "How to Choose a WiFi 7 Router",
    description:
      "What actually matters: bands, ports, range, and latency.",
    content: [
      "WiFi 7 introduces wider channels (320MHz), better efficiency, and lower latency.",
      "Look for multi-gig ports if you have fast internet or a NAS.",
      "Gaming features matter less than raw stability and throughput.",
      "Don’t overspend unless your network actually needs it.",
    ],
  },
  {
    slug: "how-to-choose-gaming-monitor",
    title: "How to Choose a Gaming Monitor",
    description:
      "Refresh rate, panel type, response time, and HDR basics.",
    content: [
      "Prioritize refresh rate (144Hz+ for gaming).",
      "IPS panels = better color, TN = faster response.",
      "Check real HDR performance, not just labels.",
      "Resolution vs GPU power matters more than people think.",
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}