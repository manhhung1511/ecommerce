
import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Doanh thu trong tuần",
      backgroundColor: "#20C9AC",
      borderColor: "#20C9AC",
      data: [2, 3, 5, 2, 8, 4, 9],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;