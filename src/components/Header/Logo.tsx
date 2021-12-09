import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight">
      João Melo
      <Text color="cyan.500" as="span" ml="1">
        .
      </Text>
    </Text>
  );
}
