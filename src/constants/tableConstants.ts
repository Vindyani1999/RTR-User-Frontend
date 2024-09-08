export type TableComponent =
  | "RoundTable8"
  | "RectangleTable2"
  | "RectangleTable8"
  | "RectangleTable12"
  | "RoundTable4";

export type TableStatus = "available" | "upcoming" | "seated";

export const tables = [
  { id: 1, x: 180, y: 120, component: "RoundTable8" as TableComponent, status: "available" as TableStatus },
  { id: 2, x: 180, y: 280, component: "RoundTable8" as TableComponent, status: "upcoming" as TableStatus },
  { id: 3, x: 180, y: 440, component: "RoundTable8" as TableComponent, status: "seated" as TableStatus },
  { id: 4, x: 370, y: 135, component: "RectangleTable8" as TableComponent, status: "available" as TableStatus },
  { id: 5, x: 370, y: 325, component: "RoundTable8" as TableComponent, status: "upcoming" as TableStatus },
  { id: 6, x: 370, y: 515, component: "RectangleTable8" as TableComponent, status: "seated" as TableStatus },
  { id: 7, x: 560, y: 115, component: "RoundTable4" as TableComponent, status: "available" as TableStatus },
  { id: 8, x: 620, y: 285, component: "RectangleTable12" as TableComponent, status: "upcoming" as TableStatus },
  { id: 9, x: 530, y: 555, component: "RectangleTable2" as TableComponent, status: "seated" as TableStatus },
  { id: 10, x: 530, y: 440, component: "RectangleTable2" as TableComponent, status: "available" as TableStatus },
  { id: 11, x: 630, y: 555, component: "RectangleTable2" as TableComponent, status: "upcoming" as TableStatus },
  { id: 12, x: 630, y: 440, component: "RectangleTable2" as TableComponent, status: "seated" as TableStatus },
  { id: 13, x: 730, y: 440, component: "RectangleTable2" as TableComponent, status: "available" as TableStatus },
  { id: 14, x: 730, y: 555, component: "RectangleTable2" as TableComponent, status: "upcoming" as TableStatus },
  { id: 15, x: 710, y: 115, component: "RoundTable4" as TableComponent, status: "seated" as TableStatus },
  { id: 16, x: 900, y: 130, component: "RoundTable8" as TableComponent, status: "available" as TableStatus },
  { id: 17, x: 1095, y: 130, component: "RoundTable8" as TableComponent, status: "upcoming" as TableStatus },
  { id: 18, x: 930, y: 520, component: "RectangleTable12" as TableComponent, status: "seated" as TableStatus },
  { id: 19, x: 880, y: 320, component: "RectangleTable8" as TableComponent, status: "available" as TableStatus },
  { id: 20, x: 1095, y: 310, component: "RoundTable8" as TableComponent, status: "upcoming" as TableStatus },
  { id: 21, x: 1125, y: 565, component: "RectangleTable2" as TableComponent, status: "seated" as TableStatus },
  { id: 22, x: 1125, y: 450, component: "RectangleTable2" as TableComponent, status: "available" as TableStatus },
  { id: 23, x: 1305, y: 140, component: "RectangleTable8" as TableComponent, status: "upcoming" as TableStatus },
  { id: 24, x: 1305, y: 330, component: "RectangleTable8" as TableComponent, status: "seated" as TableStatus },
  { id: 25, x: 1305, y: 530, component: "RectangleTable8" as TableComponent, status: "available" as TableStatus },
];
