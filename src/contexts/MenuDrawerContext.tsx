import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface MenuDrawerProviderProps {
  children: ReactNode;
}

type MenuDrawerContextData = UseDisclosureReturn;

const MenuDrawerContext = createContext({} as MenuDrawerContextData);

export function MenuDrawerProvider({ children }: MenuDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <MenuDrawerContext.Provider value={disclosure}>
      {children}
    </MenuDrawerContext.Provider>
  );
}

export const useMenuDrawer = () => useContext(MenuDrawerContext);
