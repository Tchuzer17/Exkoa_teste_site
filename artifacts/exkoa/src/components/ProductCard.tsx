import type { Product } from "@/data/products";
import { useTranslation } from "react-i18next";
import { useCart } from "@/store/cart";

export const ProductCard = ({ product }: { product: Product }) => {
  const { t } = useTranslation();
  const add = useCart((s) => s.add);
  const Icon = product.icon;

  const fmt = (n: number) =>
    new Intl.NumberFormat("pt-PT", { maximumFractionDigits: 0 }).format(n);

  const incoterm = product.id.charCodeAt(0) % 2 === 0 ? "FOB" : "CIF";

  return (
    <article className="rounded-2xl bg-card border border-border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-elevated group flex flex-col">
      <div className="relative h-40 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center">
            <Icon className="h-14 w-14 text-primary/70" strokeWidth={1.25} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary border border-primary/20">
          {incoterm}
        </span>
        <span className="absolute bottom-3 left-3 text-white font-display font-extrabold text-lg leading-none drop-shadow">
          {product.name}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="font-display text-2xl font-extrabold text-foreground leading-none">
          {fmt(product.pricePerKg)} <span className="text-sm font-semibold text-muted-foreground">AOA/kg</span>
        </p>
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
