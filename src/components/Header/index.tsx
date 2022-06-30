import {
  Box,
  useBreakpointValue,
  IconButton,
  Icon,
  Switch,
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

export function Header() {
  const { onOpen } = useMenuDrawer();
  const { toggleColorMode, colorMode } = useColorMode();

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
      borderBottomColor={colorMode === 'dark' ? "brand.gray.800" : "gray.100"}
    >
      <Box className={styles.headerContent}>
        <Logo />

        {!isWideVersion && (
          <IconButton
            aria-label="Open navigation"
            color="white"
            onClick={onOpen}
            fontSize="24"
            ml="auto"
            mr="2"
            icon={<Icon as={RiMenuLine} />}
            variant="unstyled"
          />
        )}

        {isWideVersion ? <SidebarNav /> : <Sidebar />}

        <Switch
          size="lg"
          onChange={toggleColorMode}
          colorScheme="cyan"
          isChecked={colorMode === "light"}
        />

        {isWideVersion && (
          <Link href="/posts">
            <Button
              backgroundColor={colorMode === 'dark' ? "brand.gray.850" : 'gray.400'}
              icon={FaNewspaper}
              text="See the latest posts"
              // textColor={colorMode === 'light' ? 'black' : undefined}
              iconColor={colorMode === 'light' ? "white" : "brand.green.500"}
            />
          </Link>
        )}
      </Box>
    </Box>
  );
}
