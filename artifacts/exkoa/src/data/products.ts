import {
  Wheat, Bean, CircleDot, Droplet, Coffee, Cookie, Nut, Sprout,
  Leaf, type LucideIcon,
} from "lucide-react";

export type Category = "Cereais" | "Leguminosas" | "Tubérculos" | "Óleos" | "Outros";
export type Region = "Luanda" | "Huambo" | "Benguela" | "Malanje" | "Huíla" | "Cabinda";

export interface Product {
  id: string;
  name: string;
  category: Category;
  pricePerKg: number; // AOA
  pricePerTon: number; // AOA
  stockKg: number;
  region: Region;
  icon: LucideIcon;
  description: string;
}

export const products: Product[] = [
  { id: "milho",       name: "Milho",            category: "Cereais",     pricePerKg:  450, pricePerTon:  390000, stockKg: 12000, region: "Huambo",   icon: Wheat,     description: "Milho amarelo de primeira qualidade, ideal para ração e farinha." },
  { id: "soja",        name: "Soja",             category: "Leguminosas", pricePerKg:  720, pricePerTon:  640000, stockKg:  8400, region: "Malanje",  icon: Bean,      description: "Grão de soja não-OGM, alto teor proteico." },
  { id: "feijao",      name: "Feijão",           category: "Leguminosas", pricePerKg:  980, pricePerTon:  870000, stockKg:  5200, region: "Huíla",    icon: Bean,      description: "Feijão preto selecionado, embalagem 50kg." },
  { id: "arroz",       name: "Arroz",            category: "Cereais",     pricePerKg:  650, pricePerTon:  580000, stockKg: 18000, region: "Luanda",   icon: CircleDot, description: "Arroz branco longo grão, polido e limpo." },
  { id: "acucar",      name: "Açúcar",           category: "Outros",      pricePerKg:  580, pricePerTon:  510000, stockKg: 22000, region: "Benguela", icon: CircleDot, description: "Açúcar cristal refinado." },
  { id: "sal",         name: "Sal",              category: "Outros",      pricePerKg:  120, pricePerTon:   95000, stockKg: 30000, region: "Benguela", icon: CircleDot, description: "Sal marinho refinado iodado." },
  { id: "oleo-palma",  name: "Óleo de Palma",    category: "Óleos",       pricePerKg: 1100, pricePerTon:  980000, stockKg:  6400, region: "Cabinda",  icon: Droplet,   description: "Óleo de palma vermelho, prensado a frio." },
  { id: "cafe",        name: "Café",             category: "Outros",      pricePerKg: 2400, pricePerTon: 2150000, stockKg:  3200, region: "Huambo",   icon: Coffee,    description: "Café arábica torrado, origem Gabela." },
  { id: "cacau",       name: "Cacau",            category: "Outros",      pricePerKg: 2800, pricePerTon: 2500000, stockKg:  2100, region: "Cabinda",  icon: Cookie,    description: "Sementes de cacau fermentadas e secas." },
  { id: "farinha",     name: "Farinha de Trigo", category: "Cereais",     pricePerKg:  520, pricePerTon:  460000, stockKg: 14000, region: "Luanda",   icon: Wheat,     description: "Farinha de trigo tipo 1 para panificação." },
  { id: "quinoa",      name: "Quinoa",           category: "Cereais",     pricePerKg: 3200, pricePerTon: 2900000, stockKg:   900, region: "Huíla",    icon: Sprout,    description: "Quinoa branca, alto valor nutricional." },
  { id: "lentilha",    name: "Lentilha",         category: "Leguminosas", pricePerKg: 1100, pricePerTon:  980000, stockKg:  4200, region: "Malanje",  icon: Bean,      description: "Lentilha verde selecionada." },
  { id: "grao-bico",   name: "Grão de Bico",     category: "Leguminosas", pricePerKg: 1250, pricePerTon: 1110000, stockKg:  3800, region: "Huíla",    icon: Bean,      description: "Grão de bico graúdo, calibre 8mm." },
  { id: "amendoim",    name: "Amendoim",         category: "Leguminosas", pricePerKg:  890, pricePerTon:  790000, stockKg:  6700, region: "Malanje",  icon: Nut,       description: "Amendoim com casca, primeira safra." },
  { id: "gergelim",    name: "Gergelim",         category: "Outros",      pricePerKg: 1650, pricePerTon: 1480000, stockKg:  2400, region: "Huambo",   icon: Sprout,    description: "Gergelim branco, exportação." },
  { id: "sorgo",       name: "Sorgo",            category: "Cereais",     pricePerKg:  380, pricePerTon:  330000, stockKg:  9500, region: "Huíla",    icon: Wheat,     description: "Sorgo granífero para alimentação animal." },
  { id: "milhete",     name: "Milhete",          category: "Cereais",     pricePerKg:  410, pricePerTon:  360000, stockKg:  7100, region: "Huambo",   icon: Wheat,     description: "Milhete tradicional angolano." },
  { id: "cevada",      name: "Cevada",           category: "Cereais",     pricePerKg:  490, pricePerTon:  430000, stockKg:  4400, region: "Malanje",  icon: Wheat,     description: "Cevada cervejeira de boa malteação." },
  { id: "aveia",       name: "Aveia",            category: "Cereais",     pricePerKg:  680, pricePerTon:  600000, stockKg:  3300, region: "Luanda",   icon: Leaf,      description: "Flocos de aveia integrais." },
  { id: "caju",        name: "Castanha de Caju", category: "Outros",      pricePerKg: 3400, pricePerTon: 3050000, stockKg:  1700, region: "Cabinda",  icon: Nut,       description: "Castanha de caju W320 grade exportação." },
];

export const categories: Category[] = ["Cereais", "Leguminosas", "Tubérculos", "Óleos", "Outros"];
export const regions: Region[] = ["Luanda", "Huambo", "Benguela", "Malanje", "Huíla", "Cabinda"];
