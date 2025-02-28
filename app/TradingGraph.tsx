"use client";
import { Line } from "react-chartjs-2";

export default function TradingGraph() {
  const data = {
    labels: Array.from({ length: 50 }, (_, i) => i),
    datasets: [
      {
        label: "Stock Price Simulation",
        data: Array.from({ length: 50 }, () => Math.random() * 100),
        borderColor: "#facc15",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div style={{ width: "600px", height: "300px", marginTop: "20px" }}>
      <Line data={data} />
    </div>
  );
}
