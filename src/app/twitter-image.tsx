import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 675,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at 12% 16%, #3b82f6 0%, transparent 36%), radial-gradient(circle at 85% 0%, #22d3ee 0%, transparent 34%), #020617",
          color: "white",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 700 }}>Makers AI Labs</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.06 }}>
            Build Products Clients Trust
          </div>
          <div style={{ fontSize: 30, color: "#cbd5e1" }}>
            AI, web, and cloud engineering for enterprise growth.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
