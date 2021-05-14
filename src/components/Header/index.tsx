import { Box, Text, Link, Tag } from "@chakra-ui/react";
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
          <Link
            className={styles.active}
            href=""
            _hover={{
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            href=""
            _hover={{
              textDecoration: "none",
            }}
          >
            Posts
          </Link>
        </nav>

        <CallButton />
      </Box>
    </header>
  );
}
