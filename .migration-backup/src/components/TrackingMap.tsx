import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip } from "react-leaflet";
import { useTranslation } from "react-i18next";
import { routes } from "@/data/routes";
import { useEffect, useState } from "react";

export const TrackingMap = () => {
  const { t } = useTranslation();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="rastreamento" className="section-y border-t border-border bg-secondary/30">
      <div className="container-x">
        <p className="label-caps text-primary">Tracking</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">{t("track.title")}</h2>
        <p className="mt-3 text-muted-foreground max-w-xl">{t("track.sub")}</p>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card-surface overflow-hidden h-[480px]">
            <MapContainer center={[-11.2, 14.5]} zoom={6} className="h-full w-full" scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; OpenStreetMap, &copy; CARTO'
              />
              {routes.map((r) => (
                <Polyline
                  key={r.id}
                  positions={r.path.map((p) => [p.lat, p.lng] as [number, number])}
                  pathOptions={{ color: "#2D6A2E", weight: 2.5, dashArray: "6 6" }}
                />
              ))}
              {routes.map((r) => {
                const radius = 8 + ((tick + r.id.length) % 4);
                return (
                  <CircleMarker
                    key={r.id}
                    center={[r.current.lat, r.current.lng]}
                    radius={radius}
                    pathOptions={{ color: "#2D6A2E", fillColor: "#4A8C4B", fillOpacity: 0.85, weight: 2 }}
                  >
                    <Tooltip>{r.label}</Tooltip>
                  </CircleMarker>
                );
              })}
            </MapContainer>
          </div>
          <div className="space-y-3">
            {routes.map((r) => (
              <div key={r.id} className="card-surface p-5">
                <div className="flex items-center justify-between">
                  <p className="font-display font-bold">{r.id}</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{r.status}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{r.label}</p>
                <p className="text-xs text-muted-foreground mt-1">ETA: {r.eta}</p>
                <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${r.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
