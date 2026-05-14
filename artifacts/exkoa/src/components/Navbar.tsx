import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/store/theme";
import { Logo } from "./Logo";

const langs = [
  { code: "pt", flag: "🇵🇹" },
  { code: "en", flag: "🇬🇧" },
  { code: "es", flag: "🇪🇸" },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/produtores", label: t("nav.produtores") },
    { to: "/transportadores", label: t("nav.transportadores") },
    { to: "/compradores", label: t("nav.compradores") },
    { to: "/mercado", label: t("nav.mercado") },
    { to: "/rastreamento", label: t("nav.rastreamento") },
    { to: "/#impacto", label: "Impacto", anchor: true },
    { to: "/#quem-somos", label: "Quem Somos", anchor: true },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all bg-background ${
        scrolled ? "shadow-sm border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) =>
            l.anchor ? (
              <a
                key={l.to}
                href={l.to}
                className="text-[15px] transition-colors text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[15px] transition-colors ${isActive ? "text-foreground font-semibold" : "text-foreground/80 hover:text-primary"}`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground focus:outline-none cursor-pointer mr-1"
            aria-label="Language"
          >
            {langs.map((l) => (
              <option key={l.code} value={l.code}>{l.flag}</option>
            ))}
          </select>
          <button
            onClick={toggle}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link to="/auth" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            {t("nav.login")}
          </Link>
          <Link to="/auth" className="inline-flex items-center justify-center rounded-full border-2 border-primary px-5 py-[6px] text-sm font-semibold text-primary hover:bg-primary/5 transition-colors">
            {t("nav.cta")}
          </Link>
        </div>

        <button
          className="lg:hidden rounded-lg p-2 hover:bg-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) =>
              l.anchor ? (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-foreground"
                >
                  {l.label}
                </a>
              ) : (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-foreground"
                >
                  {l.label}
                </NavLink>
              )
            )}
            <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
              <button onClick={toggle} className="rounded-lg p-2 hover:bg-secondary" aria-label="Theme">
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <Link to="/auth" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground flex-1" onClick={() => setOpen(false)}>{t("nav.cta")}</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
