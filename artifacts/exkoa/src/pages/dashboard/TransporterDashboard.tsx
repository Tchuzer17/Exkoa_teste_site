import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip } from "react-leaflet";
import { routes } from "@/data/routes";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip as RTooltip, CartesianGrid } from "recharts";
import { Check, X } from "lucide-react";

const earnings = [
  { day: "Seg", v: 320000 }, { day: "Ter", v: 410000 }, { day: "Qua", v: 280000 },
  { day: "Qui", v: 520000 }, { day: "Sex", v: 610000 }, { day: "Sáb", v: 470000 }, { day: "Dom", v: 180000 },
];

const pending = [
  { id: "EX-2001", route: "Huambo → Luanda", load: "Milho 4.000 kg", payout: "85.000 AOA" },
  { id: "EX-2002", route: "Cabinda → Benguela", load: "Cacau 800 kg", payout: "120.000 AOA" },
];

const TransporterDashboard = () => {
  const [reqs, setReqs] = useState(pending);
  return (
    <DashboardLayout role="transportador" title="Dashboard do Transportador">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-surface overflow-hidden h-[420px]">
          <MapContainer center={[-11.2, 14.5]} zoom={6} className="h-full w-full">
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" attribution="&copy; CARTO" />
            {routes.map((r) => (
              <Polyline key={r.id} positions={r.path.map((p) => [p.lat, p.lng] as [number, number])} pathOptions={{ color: "#2D6A2E", weight: 2.5, dashArray: "6 6" }} />
            ))}
            {routes.map((r) => (
              <CircleMarker key={r.id} center={[r.current.lat, r.current.lng]} radius={9} pathOptions={{ color: "#2D6A2E", fillColor: "#4A8C4B", fillOpacity: 0.85 }}>
                <Tooltip>{r.label}</Tooltip>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
        <div className="card-surface p-5">
          <h2 className="font-display font-bold text-lg mb-3">Earnings Semanais</h2>
          <div className="h-[330px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={earnings}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `${v/1000}k`} />
                <RTooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="v" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card-surface mt-6 p-5">
        <h2 className="font-display font-bold text-lg mb-4">Rotas Pendentes</h2>
        <div className="space-y-3">
          {reqs.map((r) => (
            <div key={r.id} className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-lg border border-border">
              <div>
                <p className="font-medium">{r.id} · {r.route}</p>
                <p className="text-sm text-muted-foreground">{r.load} · Payout: {r.payout}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setReqs(reqs.filter((x) => x.id !== r.id))} className="btn-primary !py-2 !px-3">
                  <Check className="h-4 w-4" /> Aceitar
                </button>
                <button onClick={() => setReqs(reqs.filter((x) => x.id !== r.id))} className="btn-ghost !py-2 !px-3 text-destructive">
                  <X className="h-4 w-4" /> Recusar
                </button>
              </div>
            </div>
          ))}
          {reqs.length === 0 && <p className="text-sm text-muted-foreground">Sem rotas pendentes.</p>}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TransporterDashboard;
