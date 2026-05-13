export type OrderStatus = "Aguardando" | "Em Trânsito" | "Entregue";
export interface Order {
  id: string;
  product: string;
  quantityKg: number;
  totalAOA: number;
  buyer: string;
  transporter: string;
  status: OrderStatus;
  eta: string;
  origin: string;
  destination: string;
  progress: number; // 0-100
}

export const orders: Order[] = [
  { id: "EX-1042", product: "Milho",            quantityKg: 5000,  totalAOA: 1950000, buyer: "AgroSul Lda", transporter: "TransAfrica", status: "Em Trânsito", eta: "2 dias", origin: "Huambo",   destination: "Luanda",   progress: 64 },
  { id: "EX-1041", product: "Soja",             quantityKg: 2000,  totalAOA: 1280000, buyer: "Nutri Foods",  transporter: "RotaLog",     status: "Em Trânsito", eta: "1 dia",  origin: "Malanje",  destination: "Luanda",   progress: 82 },
  { id: "EX-1040", product: "Feijão",           quantityKg: 800,   totalAOA:  696000, buyer: "Mercado Cazenga", transporter: "FastMov",  status: "Entregue",    eta: "—",      origin: "Huíla",    destination: "Luanda",   progress: 100 },
  { id: "EX-1039", product: "Café",             quantityKg: 300,   totalAOA:  645000, buyer: "Café Premium", transporter: "TransAfrica", status: "Aguardando",  eta: "5 dias", origin: "Huambo",   destination: "Cabinda",  progress: 0 },
  { id: "EX-1038", product: "Óleo de Palma",    quantityKg: 1500,  totalAOA: 1470000, buyer: "Refinaria BG", transporter: "RotaLog",     status: "Em Trânsito", eta: "3 dias", origin: "Cabinda",  destination: "Benguela", progress: 38 },
  { id: "EX-1037", product: "Cacau",            quantityKg: 500,   totalAOA: 1250000, buyer: "ChocoFab",    transporter: "FastMov",     status: "Entregue",    eta: "—",      origin: "Cabinda",  destination: "Luanda",   progress: 100 },
  { id: "EX-1036", product: "Arroz",            quantityKg: 4000,  totalAOA: 2320000, buyer: "Distrib. Nacional", transporter: "TransAfrica", status: "Aguardando", eta: "4 dias", origin: "Luanda", destination: "Huambo",  progress: 0 },
  { id: "EX-1035", product: "Castanha de Caju", quantityKg: 200,   totalAOA:  610000, buyer: "Export Co",    transporter: "RotaLog",     status: "Em Trânsito", eta: "2 dias", origin: "Cabinda",  destination: "Luanda",   progress: 50 },
  { id: "EX-1034", product: "Açúcar",           quantityKg: 3500,  totalAOA: 1785000, buyer: "Doces Angola", transporter: "FastMov",     status: "Entregue",    eta: "—",      origin: "Benguela", destination: "Luanda",   progress: 100 },
  { id: "EX-1033", product: "Quinoa",           quantityKg: 100,   totalAOA:  290000, buyer: "BioMarket",    transporter: "TransAfrica", status: "Em Trânsito", eta: "3 dias", origin: "Huíla",    destination: "Luanda",   progress: 28 },
];
