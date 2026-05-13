import { Sprout, Truck, Package } from "lucide-react";
import { RolePage } from "./RolePage";

export const Producers = () => (
  <RolePage
    eyebrow="Produtores"
    title="Venda direto para compradores corporativos."
    sub="Cadastre seu produto, defina preços por volume e receba pedidos qualificados sem intermediários. Pague apenas quando vender."
    Icon={Sprout}
    benefits={[
      "Preços transparentes por kg e por tonelada",
      "Acesso direto a 800+ compradores corporativos",
      "Logística integrada com transportadores avaliados",
      "Recebimento garantido em 7 dias após entrega",
      "Painel com vendas, stock e avaliações",
      "Suporte em PT, EN e ES",
    ]}
  />
);

export const Transporters = () => (
  <RolePage
    eyebrow="Transportadores"
    title="Mais rotas, menos coordenação manual."
    sub="Receba ofertas de carga compatíveis com sua frota e otimize ocupação com rotas calculadas automaticamente."
    Icon={Truck}
    benefits={[
      "Rotas qualificadas por tipo de veículo",
      "Pagamentos semanais automáticos",
      "Tracking em tempo real para o cliente",
      "Histórico completo e earnings por veículo",
      "Avaliações que aumentam sua visibilidade",
      "Onboarding em 48h",
    ]}
  />
);

export const Buyers = () => (
  <RolePage
    eyebrow="Compradores"
    title="Compre commodities ao melhor preço de volume."
    sub="Acesso a 2.400+ produtores verificados em África, com tabelas de preço transparentes e logística incluída."
    Icon={Package}
    benefits={[
      "Catálogo de 20+ commodities não-perecíveis",
      "Preços em tempo real por kg e tonelada",
      "Tracking completo até o destino final",
      "Crédito B2B disponível (em breve)",
      "Fornecedores favoritos e re-compra rápida",
      "Faturação consolidada mensal",
    ]}
  />
);
