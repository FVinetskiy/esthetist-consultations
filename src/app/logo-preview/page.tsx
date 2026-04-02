import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Preview",
  description: "Site logo SVG preview",
};

const logos = [
  { id: "light", label: "Light theme", src: "/logos/logo.svg", bg: "#fff" },
  {
    id: "dark",
    label: "Dark theme",
    src: "/logos/logo-dark.svg",
    bg: "#1a1a1a",
  },
] as const;

export default function LogoPreviewPage() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px 48px" }}>
      <h1 style={{ margin: "0 0 24px", fontSize: 32 }}>Logo</h1>

      <div style={{ display: "grid", gap: 18 }}>
        {logos.map((logo) => (
          <section
            key={logo.id}
            style={{
              border: "1px solid #e7e7e7",
              borderRadius: 12,
              background: logo.bg,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "10px 14px",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                fontWeight: 600,
                color: logo.id === "dark" ? "#eee" : undefined,
              }}
            >
              {logo.label}
            </div>
            <img
              src={logo.src}
              alt=""
              style={{
                width: "100%",
                maxWidth: 480,
                height: "auto",
                display: "block",
                padding: 24,
              }}
            />
          </section>
        ))}
      </div>
    </main>
  );
}
