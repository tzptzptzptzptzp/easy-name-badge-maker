export const fonts = [
  {
    value: "default",
    label: "デフォルト",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  {
    value: "m-plus-rounded",
    label: "M Plus Rounded",
    fontFamily: "var(--font-m-plus-rounded), sans-serif",
  },
  {
    value: "kaisei-decol",
    label: "Kaisei Decol",
    fontFamily: "var(--font-kaisei-decol), serif",
  },
];

export type Font = (typeof fonts)[0];
export type FontValue = Font["value"];
