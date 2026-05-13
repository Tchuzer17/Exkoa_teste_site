import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const items = [
  { quote: "Aumentamos nossas vendas em 340% em 3 meses ao chegar a compradores corporativos via EXKOA.", name: "João Mendes", role: "CEO, AgroSul Lda" },
  { quote: "A logística integrada eliminou semanas de coordenação manual. Agora opero 4x mais rotas por mês.", name: "Helena Pacheco", role: "Diretora, RotaLog" },
  { quote: "Preços transparentes em volume mudaram a forma como compramos commodities para a nossa rede.", name: "Mário Tavares", role: "Head Procurement, Nutri Foods" },
];

const initials = (n: string) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");

export const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section className="section-y border-t border-border">
      <div className="container-x">
        <p className="label-caps text-primary">Testemunhos</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold max-w-2xl">{t("testimonials.title")}</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-surface p-7 flex flex-col"
            >
              <Quote className="h-7 w-7 text-primary" strokeWidth={1.75} />
              <blockquote className="mt-5 text-foreground leading-relaxed flex-1">
                "{it.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {initials(it.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{it.name}</p>
                  <p className="text-xs text-muted-foreground">{it.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
