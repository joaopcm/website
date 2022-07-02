import { Text } from "@chakra-ui/react";
import { Link } from "../Link";

export function Logo() {
  return (
    <Link _hover={{ textDecoration: 'none' }} href="/">
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight">
        João Melo
        <Text color="brand.cyan.500" as="span" ml="1">
          .
        </Text>
      </Text>
    </Link>
  );
}
