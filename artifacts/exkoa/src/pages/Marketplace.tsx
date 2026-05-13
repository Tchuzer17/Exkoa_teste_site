import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, regions, type Category, type Region } from "@/data/products";
import { motion } from "framer-motion";

const Marketplace = () => {
  const [cat, setCat] = useState<Category | "Todas">("Todas");
  const [reg, setReg] = useState<Region | "Todas">("Todas");
  const [maxPrice, setMaxPrice] = useState(4000);

  const filtered = useMemo(
    () => products.filter((p) =>
      (cat === "Todas" || p.category === cat) &&
      (reg === "Todas" || p.region === reg) &&
      p.pricePerKg <= maxPrice
    ),
    [cat, reg, maxPrice]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container-x py-12 md:py-20">
        <div className="max-w-2xl">
          <p className="label-caps text-primary">Mercado</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">Catálogo Completo</h1>
          <p className="mt-3 text-muted-foreground">Filtre por categoria, região e preço máximo por kg.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className="space-y-6">
            <div className="card-surface p-5">
              <h3 className="label-caps text-muted-foreground mb-3">Categoria</h3>
              <div className="space-y-1">
                {(["Todas", ...categories] as const).map((c) => (
                  <button key={c} onClick={() => setCat(c as any)} className={`block w-full text-left text-sm px-3 py-2 rounded-md ${cat === c ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="card-surface p-5">
              <h3 className="label-caps text-muted-foreground mb-3">Região</h3>
              <div className="flex flex-wrap gap-2">
                {(["Todas", ...regions] as const).map((r) => (
                  <button key={r} onClick={() => setReg(r as any)} className={`text-xs px-3 py-1.5 rounded-md border ${reg === r ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}>
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="card-surface p-5">
              <h3 className="label-caps text-muted-foreground mb-3">Preço máx. por kg</h3>
              <input type="range" min={100} max={4000} step={100} value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="w-full accent-primary" />
              <p className="text-sm font-medium mt-2">até {new Intl.NumberFormat("pt-PT").format(maxPrice)} AOA</p>
            </div>
          </aside>

          <div>
            <p className="text-sm text-muted-foreground mb-4">{filtered.length} produtos</p>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
