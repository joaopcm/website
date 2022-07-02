import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      gray: {
        "900": "#121214",
        "850": "#1f2729",
        "800": "#29292e",
        "700": "#323238",
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
      green: {
        "500": "#04d361",
      },
      blue: {
        "500": "#007d9c",
      },
      purple: {
        "500": "#844fba",
      }
    },
    gray: {
      "800": "#121214",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
});
