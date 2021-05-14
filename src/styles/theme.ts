import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#121214",
      "850": "#1f2729",
      "800": "#29292e",
      "300": "#a8a8b3",
      "100": "#e1e1e6",
      "50": "#eeeef2",
    },
    cyan: {
      "500": "#61dafb",
    },
    yellow: {
      "500": "#eba417",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "white",
      },
    },
  },
});