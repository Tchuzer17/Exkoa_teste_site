import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImg from "@/assets/xkoa-hero-aerial.jpeg";

export const Hero = () => {
  const [tab, setTab] = useState<"vender" | "comprar">("vender");

  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Vista aérea de campos agrícolas com tractor — pessoas, agricultura e tecnologia"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />

      <div className="container-x relative z-10 pb-20 pt-32 md:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-primary/90 backdrop-blur px-4 py-1.5 rounded-md text-sm italic text-primary-foreground font-medium"
        >
          Farm-to-table, all in one platform
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-5 font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white max-w-4xl"
        >
          <span className="text-primary-light">Compre, venda</span> e mova rápido o seu alimento
          <span className="text-white/90"> — soja, milho e mais.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed"
        >
          A única plataforma que encontra, move e entrega o seu alimento — conectando produtores, transportadores e compradores em toda a África.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 inline-flex rounded-t-xl overflow-hidden shadow-elevated"
        >
          <button
            onClick={() => setTab("vender")}
            className={`px-7 py-3.5 text-sm font-semibold transition-colors ${
              tab === "vender" ? "bg-primary text-primary-foreground" : "bg-white/95 text-foreground hover:bg-white"
            }`}
          >
            Quero vender
          </button>
          <Link
            to="/mercado"
            onClick={() => setTab("comprar")}
            className={`px-7 py-3.5 text-sm font-semibold transition-colors ${
              tab === "comprar" ? "bg-primary text-primary-foreground" : "bg-white/95 text-foreground hover:bg-white"
            }`}
          >
            Quero comprar
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
