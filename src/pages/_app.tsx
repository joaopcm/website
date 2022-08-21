import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

import { MenuDrawerProvider } from "../contexts/MenuDrawerContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { theme } from "../styles/theme";
import { LoaderSpinner } from "../components/LoaderSpinner";

function Loading() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return isLoading ? <LoaderSpinner /> : null;
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MenuDrawerProvider>
        <ToastContainer hideProgressBar />
        <Header />
        <Loading />
        <Component {...pageProps} />
        <Footer />
      </MenuDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
