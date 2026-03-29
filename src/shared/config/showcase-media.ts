const q = "w=320&q=80";

const tailored = (n: number) => `/showcase-tailored/${n}.jpg`;

export const showcaseMedia = {
  experience: "/showcase-tailored/experience.jpg",
  avatars: [
    `https://images.unsplash.com/photo-1494790108377-be9c29b29330?${q}`,
    `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?${q}`,
    `https://images.unsplash.com/photo-1544005313-94ddf0286df2?${q}`,
  ],
  marqueeA: [1, 2, 3, 4, 5].map(tailored),
  marqueeB: [6, 7, 8, 9, 10].map(tailored),
  marqueeC: [11, 12, 13, 14, 15].map(tailored),
  quoteAvatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?${q}`,
} as const;
