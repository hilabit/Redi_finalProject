import React from "react";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "test1",
    value: 100
  },
  {
    id: "test2",
    value: 200
  },
  {
    id: "test3",
    value: 200
  },
  {
    id: "test4",
    value: 20
  }
];

export const Pie = () => (
  <div style={{ width: "100%", height: "200px" }}>
    <ResponsivePie data={data} innerRadius={0.5} />
  </div>
);
