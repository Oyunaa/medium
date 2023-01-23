import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

  const backgroundColors = [];

  for (let i = 0; i < labels.length; i++) {
    let str = `rgba(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(
      Math.random() * 255 + 1
    )}, ${Math.floor(Math.random() * 255 + 1)}, 0.5)`;

    backgroundColors.push(str);
  }

  const borderColors = [];

  for (let i = 0; i < labels.length; i++) {
    let str = `rgba(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(
      Math.random() * 255 + 1
    )}, ${Math.floor(Math.random() * 255 + 1)}, 1)`;

    borderColors.push(str);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}
