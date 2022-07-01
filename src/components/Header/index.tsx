import {
  Box,
  useBreakpointValue,
  IconButton,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { FaNewspaper } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { useMenuDrawer } from "../../contexts/MenuDrawerContext";
import { Button } from "../Button";
import { Sidebar } from "./Sidebar";
import { Logo } from "./Logo";
import { SidebarNav } from "./Sidebar/SidebarNav";
import styles from "./styles.module.scss";
import { Link } from "../Link";
import { ThemeSwitcher } from "./Sidebar/ThemeSwitcher";

export function Header() {
  const { onOpen } = useMenuDrawer();
  const { colorMode } = useColorMode();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      as="header"
      h="5rem"
      borderBottom="1px"
      borderBottomStyle="solid"
      borderBottomColor={colorMode === "dark" ? "brand.gray.800" : "gray.100"}
    >
      <Box className={styles.headerContent}>
        <Logo />

        {!isWideVersion && (
          <IconButton
            aria-label="Open navigation"
            onClick={onOpen}
            fontSize="24"
            ml="auto"
            mr="2"
            icon={<Icon as={RiMenuLine} />}
            variant="unstyled"
          />
        )}

        {isWideVersion ? <SidebarNav /> : <Sidebar />}

        {isWideVersion && (
          <>
            <Link href="/posts">
              <Button
                backgroundColor={
                  colorMode === "dark" ? "brand.gray.850" : "gray.400"
                }
                icon={FaNewspaper}
                text="See the latest posts"
                iconColor={colorMode === "light" ? "white" : "brand.green.500"}
                mr={3}
              />
            </Link>

            <ThemeSwitcher />
          </>
        )}
      </Box>
    </Box>
  );
}
