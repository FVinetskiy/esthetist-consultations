import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Preview",
  description: "Three SVG logo concepts preview",
};

const logos = [
  { id: "1", src: "/logos/logo-concept-1.svg" },
  { id: "2", src: "/logos/logo-concept-2.svg" },
  { id: "3", src: "/logos/logo-concept-3.svg" },
] as const;

export default function LogoPreviewPage() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px 48px" }}>
      <h1 style={{ margin: "0 0 10px", fontSize: 32 }}>Logo concepts</h1>
      <p style={{ margin: "0 0 24px", color: "#666" }}>
        estetist kosmetolog tatyana
      </p>

      <div style={{ display: "grid", gap: 18 }}>
        {logos.map((logo) => (
          <section
            key={logo.id}
            style={{
              border: "1px solid #e7e7e7",
              borderRadius: 12,
              background: "#fff",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "10px 14px", borderBottom: "1px solid #f0f0f0", fontWeight: 600 }}>
              Variant {logo.id}
            </div>
            <img
              src={logo.src}
              alt={`Logo concept ${logo.id}`}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </section>
        ))}
      </div>
    </main>
  );
}
