import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

const ranges = {
  local: { days: "1-2 dias", min: 12000, max: 28000 },
  regional: { days: "2-4 dias", min: 28000, max: 75000 },
  nacional: { days: "3-5 dias", min: 75000, max: 180000 },
};

const cityDistance = (a: string, b: string): keyof typeof ranges => {
  const A = a.toLowerCase().trim(), B = b.toLowerCase().trim();
  if (!A || !B) return "regional";
  if (A === B) return "local";
  const cap = ["luanda", "huambo", "benguela", "lobito"];
  if (cap.includes(A) && cap.includes(B)) return "regional";
  return "nacional";
};

export const DeliverySimulator = () => {
  const { t } = useTranslation();
  const [origin, setOrigin] = useState("");
  const [dest, setDest] = useState("");
  const [weight, setWeight] = useState("1000");
  const [result, setResult] = useState<null | { days: string; cost: string }>(null);

  const calc = (e: React.FormEvent) => {
    e.preventDefault();
    const r = ranges[cityDistance(origin, dest)];
    const w = Math.max(100, Number(weight) || 1000) / 1000;
    const cost = Math.round((r.min + (r.max - r.min) * 0.5) * Math.max(1, w));
    setResult({ days: r.days, cost: new Intl.NumberFormat("pt-PT").format(cost) });
  };

  return (
    <section className="section-y border-t border-border">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="label-caps text-primary">Logística</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">{t("sim.title")}</h2>
          <p className="mt-3 text-muted-foreground max-w-md">{t("sim.sub")}</p>
        </div>
        <form onSubmit={calc} className="card-surface p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label-caps text-muted-foreground">{t("sim.origin")}</label>
              <input className="input-base mt-2" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Huambo" required />
            </div>
            <div>
              <label className="label-caps text-muted-foreground">{t("sim.destination")}</label>
              <input className="input-base mt-2" value={dest} onChange={(e) => setDest(e.target.value)} placeholder="Luanda" required />
            </div>
          </div>
          <div>
            <label className="label-caps text-muted-foreground">{t("sim.weight")}</label>
            <input type="number" min={100} className="input-base mt-2" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button className="btn-primary w-full">{t("sim.calc")}</button>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 rounded-xl bg-primary/10 p-4"
              >
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <Truck className="h-5 w-5 text-primary" />
                </motion.div>
                <p className="text-sm text-foreground">
                  {t("sim.result", { days: result.days, cost: result.cost })}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
};
