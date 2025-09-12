import { paths } from "../../paths";

export const menuValues = [
  { title: "CPU Metrics", url: "/" },
  {
    title: "Settings",
    url: "-",
    children: [
      {
        title: "History",
        url: paths.settings.history,
      },
      {
        title: "Thresholds",
        url: paths.settings.thresholds,
      },
    ],
  },
  {
    title: "Support Us",
    url: "-",
    children: [
      {
        title: "Donation",
        url: paths.supports.donation,
      },
      {
        title: "Give us star",
        url: paths.supports.gitStar,
      },
    ],
  },
  { title: "Software Info", url: "/0" },
];
