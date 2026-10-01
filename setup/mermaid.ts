import { defineMermaidSetup } from "@slidev/types";

// Pale fills with dark text and a mid-grey line colour read on both the light and the dark slide background
export default defineMermaidSetup(() => ({
  theme: "base",
  themeVariables: {
    primaryColor: "#dbeafe",
    primaryTextColor: "#111111",
    primaryBorderColor: "#1e3a8a",
    secondaryColor: "#fef3c7",
    tertiaryColor: "#dcfce7",
    lineColor: "#888888",
    edgeLabelBackground: "#ffffff",
  },
}));
