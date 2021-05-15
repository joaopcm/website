import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { MenuDrawerProvider } from "../contexts/MenuDrawerContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MenuDrawerProvider>
        <Header />
        <Component {...pageProps} />
      </MenuDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
