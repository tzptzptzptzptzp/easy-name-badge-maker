export const fonts = [
  {
    value: "default",
    label: "Default",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  {
    value: "kaisei-decol",
    label: "Kaisei Decol",
    fontFamily: "var(--font-kaisei-decol), serif",
  },
  {
    value: "m-plus-rounded",
    label: "MPLUS Rounded",
    fontFamily: "var(--font-m-plus-rounded), sans-serif",
  },
  {
    value: "yuji-syuku",
    label: "YujiSyuku",
    fontFamily: "var(--font-yuji-syuku), serif",
  },
  {
    value: "yusei-magic",
    label: "Yusei Magic",
    fontFamily: "var(--font-yusei-magic), sans-serif",
  },
  {
    value: "zen-antique",
    label: "ZenAntique",
    fontFamily: "var(--font-zen-antique), serif",
  },
  {
    value: "dela-gothic-one",
    label: "Dela Gothic One",
    fontFamily: "var(--font-dela-gothic-one), sans-serif",
  },
  {
    value: "mochiy-pop-one",
    label: "Mochiy Pop One",
    fontFamily: "var(--font-mochiy-pop-one), sans-serif",
  },
  {
    value: "rampart-one",
    label: "Rampart One",
    fontFamily: "var(--font-rampart-one), sans-serif",
  },
  {
    value: "rocknroll-one",
    label: "RocknRoll One",
    fontFamily: "var(--font-rocknroll-one), sans-serif",
  },
];

export type Font = (typeof fonts)[0];
export type FontValue = Font["value"];
