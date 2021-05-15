import { Flex, FlexProps } from "@chakra-ui/react";

export function Card({ children, ...rest }: FlexProps) {
  return (
    <Flex bg="gray.800" borderRadius="8" direction="column" p="8" {...rest}>
      {children}
    </Flex>
  );
}
