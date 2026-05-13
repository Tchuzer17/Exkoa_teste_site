import { NavLink, useLocation, Link } from "react-router-dom";
import { Wheat, LayoutDashboard, Box, ShoppingCart, Truck, BarChart3, Settings, LogOut, Map as MapIcon, Wallet, History, Heart } from "lucide-react";
import type { Role } from "@/store/auth";
import { useAuth } from "@/store/auth";

const itemsByRole: Record<Role, { to: string; label: string; Icon: typeof Box }[]> = {
  produtor: [
    { to: "/dashboard/produtor", label: "Dashboard", Icon: LayoutDashboard },
    { to: "/dashboard/produtor/produtos", label: "Meus Produtos", Icon: Box },
    { to: "/dashboard/produtor/pedidos", label: "Pedidos", Icon: ShoppingCart },
    { to: "/dashboard/produtor/transporte", label: "Transporte", Icon: Truck },
    { to: "/dashboard/produtor/relatorios", label: "Relatórios", Icon: BarChart3 },
    { to: "/dashboard/produtor/config", label: "Configurações", Icon: Settings },
  ],
  transportador: [
    { to: "/dashboard/transportador", label: "Dashboard", Icon: LayoutDashboard },
    { to: "/dashboard/transportador/rotas", label: "Rotas Ativas", Icon: MapIcon },
    { to: "/dashboard/transportador/historico", label: "Histórico", Icon: History },
    { to: "/dashboard/transportador/veiculos", label: "Veículos", Icon: Truck },
    { to: "/dashboard/transportador/earnings", label: "Earnings", Icon: Wallet },
    { to: "/dashboard/transportador/config", label: "Configurações", Icon: Settings },
  ],
  comprador: [
    { to: "/dashboard/comprador", label: "Dashboard", Icon: LayoutDashboard },
    { to: "/mercado", label: "Mercado", Icon: ShoppingCart },
    { to: "/dashboard/comprador/pedidos", label: "Pedidos", Icon: History },
    { to: "/dashboard/comprador/saved", label: "Fornecedores", Icon: Heart },
    { to: "/dashboard/comprador/config", label: "Configurações", Icon: Settings },
  ],
};

export const DashboardLayout = ({ role, children, title }: { role: Role; children: React.ReactNode; title: string }) => {
  const items = itemsByRole[role];
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-[#161712] text-white p-5 sticky top-0 h-screen">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold mb-10">
          <Wheat className="h-5 w-5" style={{ color: "hsl(121 31% 55%)" }} /> EXKOA
        </Link>
        <nav className="flex-1 space-y-1">
          {items.map((it) => {
            const active = pathname === it.to;
            return (
              <NavLink
                key={it.to}
                to={it.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <it.Icon className="h-4 w-4" /> {it.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="border-t border-white/10 pt-4 mt-4">
          <div className="text-sm font-medium">{user?.name || "Convidado"}</div>
          <div className="text-xs text-white/50 mb-3 capitalize">{role}</div>
          <button onClick={logout} className="flex items-center gap-2 text-xs text-white/60 hover:text-white">
            <LogOut className="h-3.5 w-3.5" /> Sair
          </button>
        </div>
      </aside>

      {/* Mobile bottom tab bar */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#161712] text-white border-t border-white/10 grid" style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 5)}, 1fr)` }}>
        {items.slice(0, 5).map((it) => {
          const active = pathname === it.to;
          return (
            <NavLink key={it.to} to={it.to} className={`flex flex-col items-center gap-1 py-2.5 text-[10px] ${active ? "text-white" : "text-white/50"}`}>
              <it.Icon className="h-5 w-5" /> {it.label.split(" ")[0]}
            </NavLink>
          );
        })}
      </nav>

      <main className="flex-1 min-w-0 pb-20 lg:pb-0">
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="px-6 lg:px-10 h-16 flex items-center justify-between">
            <h1 className="font-display text-xl font-bold">{title}</h1>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Voltar ao site</Link>
          </div>
        </header>
        <div className="p-6 lg:p-10">{children}</div>
      </main>
    </div>
  );
};
