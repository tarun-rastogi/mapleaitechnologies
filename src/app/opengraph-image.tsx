import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px",
          background:
            "radial-gradient(circle at 20% 20%, #60a5fa 0%, transparent 42%), radial-gradient(circle at 80% 0%, #22d3ee 0%, transparent 36%), #0f172a",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#bfdbfe",
          }}
        >
          Makers AI Labs
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.08 }}>
            Enterprise AI and Product Engineering
          </div>
          <div style={{ fontSize: 28, color: "#cbd5e1" }}>
            We build digital products that accelerate growth and market trust.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
