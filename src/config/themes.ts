type ThemeType = {
  value: string;
  label: string;
  colors: {
    main: string;
    bg: string;
    font: string;
  };
};

export const themes: ThemeType[] = [
  {
    value: "default",
    label: "デフォルト",
    colors: {
      main: "rgb(55, 69, 95)",
      bg: "#fff",
      font: "#555",
    },
  },
  {
    value: "dark",
    label: "ダーク",
    colors: {
      main: "#555",
      bg: "#555",
      font: "#fff",
    },
  },
  {
    value: "girly",
    label: "ガーリー",
    colors: {
      main: "#aad6ec",
      bg: "#eef9ff",
      font: "#fc9d9d",
    },
  },
  {
    value: "nature",
    label: "ナチュラル",
    colors: {
      main: "#77af9c",
      bg: "#fff",
      font: "#757575",
    },
  },
  {
    value: "pinky",
    label: "ピンキー",
    colors: {
      main: "#ee817b",
      bg: "#fcecea",
      font: "#928484",
    },
  },
  {
    value: "soft",
    label: "ソフト",
    colors: {
      main: "#9fbcdf",
      bg: "#ffeed5",
      font: "#79a1d4",
    },
  },
  {
    value: "night",
    label: "ナイト",
    colors: {
      main: "#6495ed",
      bg: "#38383e",
      font: "#b2e2ec",
    },
  },
  {
    value: "sky",
    label: "スカイ",
    colors: {
      main: "#64bcfc",
      bg: "#fff",
      font: "#68c5f3",
    },
  },
];

export type Theme = (typeof themes)[0];
export type ThemeValue = Theme["value"];
export type ThemeColors = Theme["colors"];
