import { motion } from "framer-motion";
import { ArrowsRightLeftIcon, ArrowTrendingUpIcon, CursorArrowRaysIcon, CpuChipIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const solutions = [
  {
    Icon: ArrowsRightLeftIcon,
    name: "barter",
    nameAccent: "fácil",
    desc: "Otimize as suas operações de barter, permitindo que a sua equipa comercial alcance novos níveis de eficiência.",
  },
  {
    Icon: ArrowTrendingUpIcon,
    name: "inteligência",
    nameAccent: "de mercado",
    desc: "Transforme dados em oportunidades com a Inteligência de Mercado da EXKOA.",
  },
  {
    Icon: CursorArrowRaysIcon,
    name: "clicou",
    nameAccent: "fechou!",
    desc: "Automatize a negociação de grãos e foque-se em decisões estratégicas.",
  },
  {
    Icon: CpuChipIcon,
    name: "inteligência",
    nameAccent: "artificial",
    desc: "Impulsione as operações da sua empresa com soluções avançadas de IA.",
  },
];

export const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section id="how" className="section-y border-t border-border bg-secondary/30">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1]"
          >
            Atuamos em toda a cadeia de comercialização agrícola
          </motion.h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-md">
            Desde o planeamento até à pós-negociação, com soluções para potenciar a sua equipa e obter melhores resultados.
          </p>
          <Link
            to="/mercado"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Conheça as nossas soluções
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl bg-card border border-border p-7 hover:shadow-elevated hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <s.Icon className="h-[22px] w-[22px]" />
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight">
                  <span className="text-foreground">{s.name}</span>
                  <span className="text-primary">{s.nameAccent}</span>
                </h3>
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed text-[15px]">{s.desc}</p>
              <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all">
                Conhecer solução <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
