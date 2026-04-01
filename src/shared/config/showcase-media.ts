const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

export const showcaseMedia = {
  experience: "/showcase-tailored/experience.jpg",
  avatars: [
    "/showcase-tailored/avatar-1.jpg",
    "/showcase-tailored/avatar-2.jpg",
    "/showcase-tailored/avatar-3.jpg",
  ],
  marqueeA: [
    u("photo-1608571423902-eed4a5ad8108"),
    u("photo-1580870069867-74c57ee1bb07"),
    u("photo-1612817288484-6f916006741a"),
    u("photo-1686831451322-8d8e234a51e1"),
    u("photo-1615900119312-2acd3a71f3aa"),
    u("photo-1620916566398-39f1143ab7be"),
    u("photo-1608248543803-ba4f8c70ae0b"),
    u("photo-1567721913486-6585f069b332"),
    u("photo-1616750819456-5cdee9b85d22"),
    u("photo-1585652757141-8837d676fac8"),
  ],
  marqueeB: [
    u("photo-1576426863848-c21f53c60b19"),
    u("photo-1670201202786-0c8278d3b8b0"),
    u("photo-1571781926291-c477ebfd024b"),
    u("photo-1670201202833-b0932731628f"),
    u("photo-1638609927040-8a7e97cd9d6a"),
    u("photo-1713768704571-6aeb0d0e5105"),
    u("photo-1710410815589-dd83514104d0"),
    u("photo-1665763630810-e6251bdd392d"),
    u("photo-1699373381667-a325cbf60dfe"),
    u("photo-1696025522422-aa9a74e4f3d5"),
  ],
  marqueeC: [
    u("photo-1715027155125-810cb995203f"),
    u("photo-1696256016872-1526c9d0e280"),
    u("photo-1715750968540-841103c78d47"),
    u("photo-1688413467080-38de1b669f71"),
    u("photo-1638301868496-43577744a46c"),
    u("photo-1688413467024-c539918fdd7c"),
    u("photo-1643379850623-7eb6442cd262"),
    u("photo-1643379850274-77d2e3703ef9"),
    u("photo-1643379852776-308d9bbf8645"),
    u("photo-1699293679015-14bb8c66b34f"),
  ],
  quoteAvatar: "/showcase-tailored/quote-avatar.jpg",
} as const;
