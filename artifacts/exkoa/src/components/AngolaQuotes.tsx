import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { products, type Region } from "@/data/products";
import { ChevronDownIcon, MapPinIcon } from "@heroicons/react/24/solid";
import angolaMap from "@/assets/angola-map.png";

const ALL_PROVINCES = [
  "Luanda", "Benguela", "Huíla", "Huambo", "Malanje", "Cabinda",
  "Zaire", "Uíge", "Bengo", "Cuanza Norte", "Cuanza Sul",
  "Lunda Norte", "Lunda Sul", "Bié", "Moxico",
  "Namibe", "Cuando Cubango", "Cunene",
] as const;

type Province = typeof ALL_PROVINCES[number];

const PROVINCE_COORDS: Record<Province, [number, number]> = {
  "Cabinda":        [22,  6],
  "Zaire":          [19, 14],
  "Uíge":           [33, 21],
  "Luanda":         [16, 29],
  "Bengo":          [21, 33],
  "Cuanza Norte":   [29, 36],
  "Malanje":        [43, 29],
  "Lunda Norte":    [63, 22],
  "Cuanza Sul":     [24, 45],
  "Benguela":       [16, 53],
  "Huambo":         [30, 53],
  "Bié":            [44, 51],
  "Lunda Sul":      [64, 38],
  "Moxico":         [68, 53],
  "Namibe":         [13, 66],
  "Huíla":          [30, 66],
  "Cuando Cubango": [60, 69],
  "Cunene":         [28, 81],
};

export const AngolaQuotes = () => {
  const [region, setRegion] = useState<Province | "">("");
  const [productId, setProductId] = useState<string>(products[0].id);

  const selected = useMemo(() => products.find((p) => p.id === productId)!, [productId]);
  const regionalProducts = useMemo(
    () => (region ? products.filter((p) => p.region === region) : []),
    [region]
  );

  const topChips = products.slice(0, 8);
  const coords = region ? PROVINCE_COORDS[region] : null;

  return (
    <section className="section-y border-t border-border bg-secondary/30">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-stretch">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1]"
          >
            Confira as melhores cotações por{" "}
            <span className="text-primary">província!</span>
          </motion.h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-md">
            Selecione a sua província e um produto para ver as cotações e preços médios mais perto de si.
          </p>

          <div className="mt-8 card-surface p-6">
            <div className="flex flex-wrap gap-2">
              {topChips.map((p) => {
                const Icon = p.icon;
                const active = p.id === productId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setProductId(p.id)}
                    className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/70"
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                    {p.name}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 relative">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as Province)}
                className="input-base appearance-none pr-10"
              >
                <option value="">Província</option>
                {ALL_PROVINCES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <button
              disabled={!region}
              className="mt-4 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground"
            >
              Ver cotações da minha província
            </button>

            {region && (
              <div className="mt-5 border-t border-border pt-5">
                <p className="text-xs label-caps text-muted-foreground inline-flex items-center gap-1.5">
                  <MapPinIcon className="h-3.5 w-3.5 text-primary" />
                  {selected.name} · {region}
                </p>
                <p className="mt-2 font-display text-3xl font-extrabold text-foreground">
                  {selected.pricePerKg.toLocaleString("pt-PT")} <span className="text-base font-semibold text-muted-foreground">AOA/kg</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {selected.pricePerTon.toLocaleString("pt-PT")} AOA/ton
                </p>
                {regionalProducts.length > 0 && (
                  <p className="mt-3 text-xs text-muted-foreground">
                    {regionalProducts.length} produto(s) disponível(is) em {region}.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={angolaMap}
              alt="Mapa de Angola com províncias"
              className="max-h-full w-auto max-w-full object-contain drop-shadow-2xl"
              loading="lazy"
            />

            <AnimatePresence>
              {coords && (
                <motion.div
                  key={region}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    position: "absolute",
                    left: `${coords[0]}%`,
                    top: `${coords[1]}%`,
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                  }}
                >
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-primary border-2 border-white shadow-lg" />
                  </span>
                  <span
                    className="absolute left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap rounded-md bg-primary px-2 py-0.5 text-[11px] font-bold text-white shadow"
                    style={{ top: "100%" }}
                  >
                    {region}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
