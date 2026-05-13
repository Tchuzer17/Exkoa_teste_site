import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface RolePageProps {
  eyebrow: string;
  title: string;
  sub: string;
  Icon: LucideIcon;
  benefits: string[];
}

export const RolePage = ({ eyebrow, title, sub, Icon, benefits }: RolePageProps) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="container-x py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
            <Icon className="h-4 w-4" />
            <span className="label-caps">{eyebrow}</span>
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl font-extrabold">{title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{sub}</p>
          <div className="mt-8 flex gap-3">
            <Link to="/auth" className="btn-primary">Começar grátis <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/mercado" className="btn-ghost">Explorar Mercado</Link>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div key={b} className="card-surface p-5 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
