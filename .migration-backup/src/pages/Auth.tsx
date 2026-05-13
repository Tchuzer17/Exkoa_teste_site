import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Wheat, Loader2, Check, Sprout, Truck, Package } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth, type Role } from "@/store/auth";

const roles: { id: Role; Icon: typeof Sprout; key: string }[] = [
  { id: "produtor", Icon: Sprout, key: "auth.produtor" },
  { id: "transportador", Icon: Truck, key: "auth.transportador" },
  { id: "comprador", Icon: Package, key: "auth.comprador" },
];

const Auth = () => {
  const { t } = useTranslation();
  const nav = useNavigate();
  const login = useAuth((s) => s.login);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [role, setRole] = useState<Role>("produtor");
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "", country: "Angola" });
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => {
      setState("done");
      login({ name: form.name || form.email.split("@")[0], email: form.email, role, country: form.country });
      setTimeout(() => nav(`/dashboard/${role}`), 600);
    }, 900);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left brand panel */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-[#0C0D0A] text-[#FAFAF8] relative overflow-hidden">
        <a href="/" className="flex items-center gap-2 font-display text-xl font-extrabold relative z-10">
          <Wheat className="h-5 w-5" style={{ color: "hsl(121 31% 55%)" }} />
          EXKOA
        </a>
        <div className="relative z-10 max-w-md">
          <h2 className="font-display text-4xl font-extrabold leading-tight">A infraestrutura do comércio agrícola africano.</h2>
          <p className="mt-4 text-white/70">Junte-se a 2.400+ produtores, 180+ transportadores e centenas de compradores em 12 países.</p>
        </div>
        <p className="text-xs text-white/40 relative z-10">© {new Date().getFullYear()} EXKOA</p>
        {/* decorative grid */}
        <svg className="absolute inset-0 opacity-[0.05]" aria-hidden>
          <defs>
            <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <a href="/" className="lg:hidden flex items-center gap-2 font-display text-lg font-extrabold mb-8">
            <Wheat className="h-5 w-5 text-primary" /> EXKOA
          </a>
          <div className="inline-flex p-1 rounded-lg bg-secondary mb-8">
            {(["login", "signup"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                  mode === m ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
                }`}
              >
                {t(`auth.${m}`)}
              </button>
            ))}
          </div>

          <h1 className="font-display text-3xl font-extrabold">
            {mode === "login" ? "Bem-vindo de volta" : "Crie sua conta"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Preencha para continuar para a plataforma.</p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            {mode === "signup" && (
              <>
                <div>
                  <label className="label-caps text-muted-foreground">{t("auth.role")}</label>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {roles.map((r) => (
                      <button
                        type="button"
                        key={r.id}
                        onClick={() => setRole(r.id)}
                        className={`flex flex-col items-center gap-2 rounded-lg border p-3 transition-all ${
                          role === r.id ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-foreground/30"
                        }`}
                      >
                        <r.Icon className="h-5 w-5" />
                        <span className="text-xs font-medium">{t(r.key)}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label-caps text-muted-foreground">{t("auth.name")}</label>
                  <input className="input-base mt-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
              </>
            )}
            <div>
              <label className="label-caps text-muted-foreground">{t("auth.email")}</label>
              <input type="email" className="input-base mt-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div>
              <label className="label-caps text-muted-foreground">{t("auth.password")}</label>
              <input type="password" className="input-base mt-2" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            </div>
            {mode === "signup" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label-caps text-muted-foreground">{t("auth.phone")}</label>
                  <input className="input-base mt-2" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label className="label-caps text-muted-foreground">{t("auth.country")}</label>
                  <select className="input-base mt-2" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}>
                    {["Angola", "Moçambique", "Cabo Verde", "São Tomé"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            )}

            <motion.button
              whileTap={{ scale: 0.98 }}
              disabled={state !== "idle"}
              className="btn-primary w-full mt-2"
            >
              {state === "idle" && t("auth.submit")}
              {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {state === "done" && <Check className="h-4 w-4" />}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
