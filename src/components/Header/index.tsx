import { Box, Text, Link as ChakraLink, Tag } from "@chakra-ui/react";
import Link from "next/link";
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
          <ChakraLink
            as={Link}
            href="/"
            className={styles.active}
            _hover={{
              textDecoration: "none",
            }}
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={Link}
            href="/posts"
            _hover={{
              textDecoration: "none",
            }}
          >
            Posts
          </ChakraLink>
        </nav>

        <CallButton />
      </Box>
    </header>
  );
}
