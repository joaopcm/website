import { Box, useBreakpointValue, IconButton, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { FaNewspaper } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { useMenuDrawer } from "../../contexts/MenuDrawerContext";
import { Button } from "../Button";
import { Sidebar } from "./Sidebar";
import { Logo } from "./Logo";
import { SidebarNav } from "./Sidebar/SidebarNav";
import styles from "./styles.module.scss";
import { Link } from "../Link";
import { theme } from "../../styles/theme";

export function Header() {
  const { onOpen } = useMenuDrawer();
  const { toggleColorMode, colorMode } = useColorMode();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <header className={styles.headerContainer}>
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

        <Switch size='lg' onChange={toggleColorMode} isChecked={colorMode === 'light'} />

        {isWideVersion && (
          <Link href="/posts" as="/posts">
            <Button
              backgroundColor="gray.850"
              icon={FaNewspaper}
              text="See the latest posts"
              iconColor="brand.green.500"
            />
          </Link>
        )}
      </Box>
    </header>
  );
}
