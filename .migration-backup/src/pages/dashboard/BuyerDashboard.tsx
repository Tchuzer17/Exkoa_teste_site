import { DashboardLayout } from "@/components/DashboardLayout";
import { useCart } from "@/store/cart";
import { orders } from "@/data/orders";
import { Trash2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const fmt = (n: number) => new Intl.NumberFormat("pt-PT", { maximumFractionDigits: 0 }).format(n);

const BuyerDashboard = () => {
  const { items, setQty, remove, total } = useCart();

  return (
    <DashboardLayout role="comprador" title="Dashboard do Comprador">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-surface p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold">Carrinho</h2>
            <Link to="/mercado" className="btn-ghost text-primary !py-1.5">Continuar Comprando</Link>
          </div>
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground py-8 text-center">Carrinho vazio. Visite o <Link to="/mercado" className="text-primary underline">Mercado</Link>.</p>
          ) : (
            <div className="space-y-3">
              {items.map((i) => {
                const unit = i.quantityKg >= 1000 ? i.pricePerTon / 1000 : i.pricePerKg;
                return (
                  <div key={i.id} className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg border border-border">
                    <div className="flex-1 min-w-[160px]">
                      <p className="font-medium">{i.name}</p>
                      <p className="text-xs text-muted-foreground">{fmt(unit)} AOA/kg ({i.quantityKg >= 1000 ? "tarifa por ton" : "tarifa por kg"})</p>
                    </div>
                    <input type="number" min={1} value={i.quantityKg} onChange={(e) => setQty(i.id, +e.target.value)} className="input-base !w-24" />
                    <p className="font-display font-bold w-32 text-right">{fmt(unit * i.quantityKg)} AOA</p>
                    <button onClick={() => remove(i.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                  </div>
                );
              })}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Total estimado</span>
                <span className="font-display text-2xl font-extrabold">{fmt(total())} AOA</span>
              </div>
              <button className="btn-primary w-full mt-2 relative">
                Checkout
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider bg-accent text-accent-foreground px-2 py-0.5 rounded">Em breve</span>
              </button>
            </div>
          )}
        </div>

        <div className="card-surface p-5">
          <h2 className="font-display text-lg font-bold mb-4">Pedidos Recentes</h2>
          <div className="space-y-3">
            {orders.slice(0, 5).map((o) => (
              <div key={o.id} className="p-3 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{o.id}</p>
                  <span className="text-xs text-muted-foreground">{o.eta}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{o.product} · {fmt(o.quantityKg)} kg</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <MapPin className="h-3 w-3" /> {o.origin} → {o.destination}
                </div>
                <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${o.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BuyerDashboard;
