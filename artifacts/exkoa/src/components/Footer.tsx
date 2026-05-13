import { useTranslation } from "react-i18next";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  const { t } = useTranslation();

  const cols = [
    { title: t("footer.company"), items: ["Sobre", "Missão", "Carreiras", "Imprensa"] },
    { title: t("footer.platform"), items: ["Produtores", "Transportadores", "Compradores", "Mercado"] },
    { title: t("footer.support"), items: ["Central de Ajuda", "API Docs", "Status", "Contacto"] },
    { title: t("footer.legal"), items: ["Privacidade", "Termos", "Cookies", "RGPD"] },
  ];

  return (
    <footer className="bg-[#0C0D0A] text-[#FAFAF8]">
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Logo variant="light" />
            <p className="mt-3 text-sm text-white/60 max-w-xs">{t("footer.tagline")}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="label-caps text-white/40">{c.title}</h4>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} EXKOA. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="rounded-lg p-2 text-white/60 hover:text-white hover:bg-white/5 transition-colors" aria-label="social">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
