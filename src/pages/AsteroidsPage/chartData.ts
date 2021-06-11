export const date = new Date();

export const requestDate =
  date.getFullYear() + "-" + date.getDate() + "-" + (date.getMonth() + 1);

export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: {
      grid: {
        color: "rgba(0,0,0, 0.05)",
      },
      title: {
        display: true,
        text: `Asteroids going past Earth, ` + requestDate,
        color: "black",
      },
    },
    yAxes: {
      grid: {
        color: "rgba(0,0,0, 0.05)",
      },
      title: {
        display: true,
        text: "Distance from Earth in astronomical units ",
        color: "black",
      },
    },
  },
};
