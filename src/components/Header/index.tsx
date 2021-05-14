import { Box, Text, Link } from "@chakra-ui/react";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Box className={styles.headerContent}>
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
          Joao Melo
          <Text color="cyan.500" as="span" ml="1">
            .
          </Text>
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
      </Box>
    </header>
  );
}
