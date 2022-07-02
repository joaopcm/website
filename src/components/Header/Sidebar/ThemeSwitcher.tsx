import { Button, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeSwitcher() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Button
      leftIcon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      colorScheme="cyan"
      variant="ghost"
      onClick={toggleColorMode}
      borderRadius="3rem"
      h="3rem"
      minWidth="140px"
    >
      {colorMode === "light" ? "Dark mode" : "Light mode"}
    </Button>
  );
}
