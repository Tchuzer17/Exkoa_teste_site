import type { Product } from "@/data/products";
import { useTranslation } from "react-i18next";
import { useCart } from "@/store/cart";

export const ProductCard = ({ product }: { product: Product }) => {
  const { t } = useTranslation();
  const add = useCart((s) => s.add);
  const Icon = product.icon;

  const fmt = (n: number) =>
    new Intl.NumberFormat("pt-PT", { maximumFractionDigits: 0 }).format(n);

  // Alternate FOB / CIF visual badge
  const incoterm = product.id.charCodeAt(0) % 2 === 0 ? "FOB" : "CIF";

  return (
    <article className="rounded-2xl bg-card border border-border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-elevated group flex flex-col">
      <div className="relative h-32 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center">
        <Icon className="h-14 w-14 text-primary/70" strokeWidth={1.25} />
        <span className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary border border-primary/20">
          {incoterm}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="font-display text-2xl font-extrabold text-foreground leading-none">
          {fmt(product.pricePerKg)} <span className="text-sm font-semibold text-muted-foreground">AOA/kg</span>
        </p>
        <h3 className="mt-2 text-base font-semibold text-foreground">{product.name}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{product.region} · {product.category}</p>

        <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
          Preço bruto por saca de 50kg.
          <br />
          {incoterm === "FOB" ? "Frete por conta do comprador." : "Frete por conta do vendedor."}
        </p>

        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          {t("market.available")}
        </div>

        <button
          onClick={() => add({ id: product.id, name: product.name, pricePerKg: product.pricePerKg, pricePerTon: product.pricePerTon })}
          className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Ver oferta
        </button>
      </div>
    </article>
  );
};
