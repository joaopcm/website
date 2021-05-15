import { Tag, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight">
      Joao Melo
      <Text color="cyan.500" as="span" ml="1">
        .
      </Text>
      <Tag size="sm" borderRadius="full">
        Beta
      </Tag>
    </Text>
  );
}
