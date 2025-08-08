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
  {
    value: "ocean",
    label: "オーシャン",
    colors: {
      main: "#0288d1",
      bg: "#e0f7fa",
      font: "#004d40",
    },
  },
  {
    value: "sunset",
    label: "サンセット",
    colors: {
      main: "#ff7043",
      bg: "#fff3e0",
      font: "#4e342e",
    },
  },
  {
    value: "forest",
    label: "フォレスト",
    colors: {
      main: "#388e3c",
      bg: "#f1f8e9",
      font: "#3e2723",
    },
  },
  {
    value: "lavender",
    label: "ラベンダー",
    colors: {
      main: "#9575cd",
      bg: "#f3e5f5",
      font: "#4527a0",
    },
  },
  {
    value: "retro",
    label: "レトロ",
    colors: {
      main: "#d4a373",
      bg: "#fefae0",
      font: "#606c38",
    },
  },
  {
    value: "chic",
    label: "シック",
    colors: {
      main: "#bdbdbd",
      bg: "#424242",
      font: "#eeeeee",
    },
  },
  {
    value: "matcha",
    label: "マッチャ",
    colors: {
      main: "#81c784",
      bg: "#f0fff0",
      font: "#556b2f",
    },
  },
  {
    value: "peach",
    label: "ピーチ",
    colors: {
      main: "#ffab91",
      bg: "#fff5f3",
      font: "#d84315",
    },
  },
  {
    value: "mint",
    label: "ミント",
    colors: {
      main: "#4db6ac",
      bg: "#e0f2f1",
      font: "#004d40",
    },
  },
  {
    value: "grape",
    label: "グレープ",
    colors: {
      main: "#7e57c2",
      bg: "#ede7f6",
      font: "#311b92",
    },
  },
  {
    value: "coffee",
    label: "コーヒー",
    colors: {
      main: "#a1887f",
      bg: "#efebe9",
      font: "#3e2723",
    },
  },
  {
    value: "ポップ",
    label: "ポップ",
    colors: {
      main: "#fdd835",
      bg: "#fffde7",
      font: "#fbc02d",
    },
  },
  {
    value: "sakura",
    label: "サクラ",
    colors: {
      main: "#ffc0cb",
      bg: "#fff5f7",
      font: "#b565a7",
    },
  },
  {
    value: "classic",
    label: "クラシック",
    colors: {
      main: "#a1887f",
      bg: "#f5f5f5",
      font: "#5d4037",
    },
  },
  {
    value: "marine",
    label: "マリン",
    colors: {
      main: "#29b6f6",
      bg: "#ffffff",
      font: "#01579b",
    },
  },
  {
    value: "honey",
    label: "ハニー",
    colors: {
      main: "#ffca28",
      bg: "#fff8e1",
      font: "#c77000",
    },
  },
  {
    value: "ruby",
    label: "ルビー",
    colors: { main: "#d32f2f", bg: "#ffebee", font: "#b71c1c" },
  },
  {
    value: "emerald",
    label: "エメラルド",
    colors: { main: "#00796b", bg: "#e0f2f1", font: "#004d40" },
  },
  {
    value: "sapphire",
    label: "サファイア",
    colors: { main: "#1976d2", bg: "#e3f2fd", font: "#0d47a1" },
  },
  {
    value: "gold",
    label: "ゴールド",
    colors: { main: "#bca13e", bg: "#fffde7", font: "#826400" },
  },
  {
    value: "amethyst",
    label: "アメジスト",
    colors: { main: "#7b1fa2", bg: "#f3e5f5", font: "#4a148c" },
  },
  {
    value: "terracotta",
    label: "テラコッタ",
    colors: { main: "#bf360c", bg: "#fbe9e7", font: "#5d4037" },
  },
  {
    value: "slate",
    label: "スレート",
    colors: { main: "#546e7a", bg: "#eceff1", font: "#263238" },
  },
  {
    value: "denim",
    label: "デニム",
    colors: { main: "#455a64", bg: "#fafafa", font: "#263238" },
  },
  {
    value: "strawberry",
    label: "ストロベリー",
    colors: { main: "#e53935", bg: "#fff1f0", font: "#c62828" },
  },
  {
    value: "lemonade",
    label: "レモネード",
    colors: { main: "#f9a825", bg: "#fffbeb", font: "#b36b00" },
  },
  {
    value: "yuzu",
    label: "ユズ",
    colors: { main: "#afb42b", bg: "#f9fbe7", font: "#5c6bc0" },
  },
  {
    value: "koyo",
    label: "コウヨウ",
    colors: { main: "#e64a19", bg: "#fbe9e7", font: "#bf360c" },
  },
  {
    value: "ajisai",
    label: "アジサイ",
    colors: { main: "#5c6bc0", bg: "#e8eaf6", font: "#303f9f" },
  },
  {
    value: "sumi",
    label: "スミ",
    colors: { main: "#616161", bg: "#ffffff", font: "#212121" },
  },
  {
    value: "calm",
    label: "カーム",
    colors: { main: "#8c9eff", bg: "#f1f3ff", font: "#536dfe" },
  },
  {
    value: "energetic",
    label: "エナジェティック",
    colors: { main: "#ff6d00", bg: "#fff3e0", font: "#e65100" },
  },
];

export type Theme = (typeof themes)[0];
export type ThemeValue = Theme["value"];
export type ThemeColors = Theme["colors"];
