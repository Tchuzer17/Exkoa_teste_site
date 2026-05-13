export interface RoutePoint { lat: number; lng: number; }
export interface TruckRoute {
  id: string;
  label: string;
  status: "Em Trânsito" | "Aguardando" | "Entregue";
  eta: string;
  progress: number;
  path: RoutePoint[];
  current: RoutePoint;
}

// Coordinates approximated for Angolan cities
export const routes: TruckRoute[] = [
  {
    id: "EX-1042", label: "Milho · Huambo → Luanda", status: "Em Trânsito", eta: "2 dias", progress: 64,
    path: [{ lat: -12.776, lng: 15.739 }, { lat: -8.838, lng: 13.234 }],
    current: { lat: -10.4, lng: 14.2 },
  },
  {
    id: "EX-1038", label: "Óleo · Cabinda → Benguela", status: "Em Trânsito", eta: "3 dias", progress: 38,
    path: [{ lat: -5.55, lng: 12.2 }, { lat: -12.578, lng: 13.407 }],
    current: { lat: -8.0, lng: 12.7 },
  },
  {
    id: "EX-1041", label: "Soja · Malanje → Luanda", status: "Em Trânsito", eta: "1 dia", progress: 82,
    path: [{ lat: -9.541, lng: 16.341 }, { lat: -8.838, lng: 13.234 }],
    current: { lat: -8.97, lng: 13.78 },
  },
];
