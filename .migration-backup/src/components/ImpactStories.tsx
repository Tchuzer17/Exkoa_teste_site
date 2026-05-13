import { motion } from "framer-motion";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import farmerSoil from "@/assets/farmer-soil.jpg";
import farmerGrain from "@/assets/farmer-grain.jpg";
import farmerHarvest from "@/assets/farmer-harvest.jpg";

const stories = [
  {
    img: farmerSoil,
    tag: "Produtor",
    title: "Da terra ao mercado, sem intermediários",
    desc: "Pequenos produtores acedem a preços justos e a uma rede logística confiável em toda Angola.",
  },
  {
    img: farmerGrain,
    tag: "Cooperativa",
    title: "Cotações transparentes, decisões melhores",
    desc: "Acompanhe o preço médio do seu produto em tempo real e venda no momento certo.",
  },
  {
    img: farmerHarvest,
    tag: "Comunidade",
    title: "Tecnologia que respeita o campo",
    desc: "Conectamos a sabedoria do agricultor com ferramentas digitais simples e poderosas.",
  },
];

export const ImpactStories = () => {
  return (
    <section className="section-y border-t border-border bg-background">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="label-caps text-primary">Impacto</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1]">
            Histórias que nascem no <span className="text-primary">campo</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            A EXKOA é construída lado a lado com produtores, cooperativas e comunidades que alimentam África.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elevated transition-all"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/95 backdrop-blur px-3 py-1 text-[11px] font-bold tracking-wider text-primary uppercase">
                  {s.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
                >
                  Ler história <ArrowLongRightIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
