import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { MenuDrawerProvider } from "../contexts/MenuDrawerContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MenuDrawerProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MenuDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
