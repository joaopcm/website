import {
  Box,
  Text,
  Tag,
  useBreakpointValue,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaNewspaper } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { useMenuDrawer } from "../../contexts/MenuDrawerContext";
import { ActiveLink } from "./ActiveLink";
import { Button } from "../Button";
import { Sidebar } from "./Sidebar";
import styles from "./styles.module.scss";

export function Header() {
  const { onOpen } = useMenuDrawer();
  const router = useRouter();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  function handleClick() {
    router.push("/posts");
  }

  return (
    <header className={styles.headerContainer}>
      <Box className={styles.headerContent}>
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight">
          Joao Melo
          <Text color="cyan.500" as="span" ml="1">
            .
          </Text>
          <Tag size="sm" borderRadius="full">
            Beta
          </Tag>
        </Text>

        {!isWideVersion && (
          <IconButton
            aria-label="Open navigation"
            color="white"
            onClick={onOpen}
            fontSize="24"
            mr="2"
            icon={<Icon as={RiMenuLine} />}
            variant="unstyled"
          />
        )}

        {isWideVersion ? (
          <nav>
            <ActiveLink
              href="/"
              activeClassName={styles.active}
              shouldMatchExactHref
            >
              <a>Home</a>
            </ActiveLink>
            <ActiveLink href="/posts" activeClassName={styles.active}>
              <a>Posts</a>
            </ActiveLink>
            <ActiveLink href="/projects" activeClassName={styles.active}>
              <a>Projects</a>
            </ActiveLink>
            <ActiveLink href="/about" activeClassName={styles.active}>
              <a>About me</a>
            </ActiveLink>
          </nav>
        ) : (
          <Sidebar />
        )}

        {isWideVersion && (
          <Button
            backgroundColor="gray.850"
            icon={FaNewspaper}
            text="See the latest posts"
            onClick={handleClick}
            iconColor="#04d361"
          />
        )}
      </Box>
    </header>
  );
}
