import { Box, Text, Tag } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";
import { CallButton } from "./CallButton";
import styles from "./styles.module.scss";

export function Header() {
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

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <CallButton />
      </Box>
    </header>
  );
}
