import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#121214",
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
    heading: "Poppins",
    body: "Poppins",
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
