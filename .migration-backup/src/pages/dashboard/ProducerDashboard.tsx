import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { products as seed, categories } from "@/data/products";
import { orders } from "@/data/orders";
import { Plus, X, Star, ShoppingCart, Package as PackageIcon, BarChart3 } from "lucide-react";

const fmt = (n: number) => new Intl.NumberFormat("pt-PT").format(n);
const StatCard = ({ label, value, hint, Icon }: { label: string; value: string; hint: string; Icon: typeof Star }) => (
  <div className="card-surface p-5">
    <div className="flex items-center justify-between">
      <span className="label-caps text-muted-foreground">{label}</span>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </div>
    <p className="font-display text-2xl font-extrabold mt-3">{value}</p>
    <p className="text-xs text-success mt-1">{hint}</p>
  </div>
);

const ProducerDashboard = () => {
  const [list, setList] = useState(seed.slice(0, 8).map((p) => ({ ...p, active: true })));
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState({ name: "", category: "Cereais", pricePerKg: 0, pricePerTon: 0, stockKg: 0, description: "" });

  const totalSales = 8_450_000;

  return (
    <DashboardLayout role="produtor" title="Dashboard do Produtor">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Vendas" value={`${fmt(totalSales)} AOA`} hint="+12% vs mês anterior" Icon={BarChart3} />
        <StatCard label="Pedidos Ativos" value="14" hint="3 novos hoje" Icon={ShoppingCart} />
        <StatCard label="Produtos" value={String(list.length)} hint="2 cadastrados esta semana" Icon={PackageIcon} />
        <StatCard label="Avaliação Média" value="4.8" hint="120 avaliações" Icon={Star} />
      </div>

      <div className="card-surface mt-8">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-display text-lg font-bold">Meus Produtos</h2>
          <button onClick={() => setOpen(true)} className="btn-primary !py-2 !px-4">
            <Plus className="h-4 w-4" /> Adicionar
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <th className="px-5 py-3 font-medium">Produto</th>
                <th className="px-5 py-3 font-medium">Categoria</th>
                <th className="px-5 py-3 font-medium">AOA/kg</th>
                <th className="px-5 py-3 font-medium">AOA/ton</th>
                <th className="px-5 py-3 font-medium">Stock</th>
                <th className="px-5 py-3 font-medium">Ativo</th>
              </tr>
            </thead>
            <tbody>
              {list.map((p) => (
                <tr key={p.id} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 font-medium text-foreground">{p.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{p.category}</td>
                  <td className="px-5 py-3">{fmt(p.pricePerKg)}</td>
                  <td className="px-5 py-3">{fmt(p.pricePerTon)}</td>
                  <td className="px-5 py-3">{fmt(p.stockKg)} kg</td>
                  <td className="px-5 py-3">
                    <button
                      onClick={() => setList(list.map((x) => x.id === p.id ? { ...x, active: !x.active } : x))}
                      className={`w-10 h-5 rounded-full relative transition-colors ${p.active ? "bg-primary" : "bg-muted"}`}
                    >
                      <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${p.active ? "left-5" : "left-0.5"}`} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card-surface mt-6 p-5">
        <h2 className="font-display text-lg font-bold mb-4">Pedidos Recentes</h2>
        <div className="space-y-2">
          {orders.slice(0, 5).map((o) => (
            <div key={o.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50">
              <div>
                <p className="font-medium text-sm">{o.id} · {o.product}</p>
                <p className="text-xs text-muted-foreground">{o.buyer} · {fmt(o.quantityKg)} kg</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                o.status === "Entregue" ? "bg-success/15 text-success" :
                o.status === "Em Trânsito" ? "bg-primary/10 text-primary" :
                "bg-accent/15 text-accent-foreground"
              }`}>{o.status}</span>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up" onClick={() => setOpen(false)}>
          <div className="card-surface w-full max-w-lg p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl font-bold">Adicionar Produto</h3>
              <button onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setList([...list, { ...seed[0], ...draft, id: `new-${Date.now()}`, active: true } as any]);
                setOpen(false);
              }}
              className="space-y-3"
            >
              <input className="input-base" placeholder="Nome" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} required />
              <select className="input-base" value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })}>
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
              <div className="grid grid-cols-2 gap-3">
                <input type="number" className="input-base" placeholder="AOA / kg" value={draft.pricePerKg || ""} onChange={(e) => setDraft({ ...draft, pricePerKg: +e.target.value })} required />
                <input type="number" className="input-base" placeholder="AOA / ton" value={draft.pricePerTon || ""} onChange={(e) => setDraft({ ...draft, pricePerTon: +e.target.value })} required />
              </div>
              <input type="number" className="input-base" placeholder="Stock (kg)" value={draft.stockKg || ""} onChange={(e) => setDraft({ ...draft, stockKg: +e.target.value })} required />
              <textarea className="input-base" rows={3} placeholder="Descrição" value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
              <button className="btn-primary w-full">Cadastrar</button>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ProducerDashboard;
