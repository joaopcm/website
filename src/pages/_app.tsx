import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MenuDrawerProvider } from "../contexts/MenuDrawerContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MenuDrawerProvider>
        <ToastContainer hideProgressBar />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MenuDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
