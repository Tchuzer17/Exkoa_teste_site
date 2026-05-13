import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export const MarketplacePreview = () => {
  const { t } = useTranslation();
  const six = products.slice(0, 6);

  return (
    <section className="section-y border-t border-border bg-secondary/30">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-caps text-primary">Marketplace</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold text-foreground">{t("market.title")}</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">{t("market.sub")}</p>
          </div>
          <Link to="/mercado" className="btn-ghost text-primary">
            {t("market.viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {six.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
