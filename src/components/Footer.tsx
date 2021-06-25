import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Logo } from "./Header/Logo";

export function Footer() {
  return (
    <Box bgColor="black" px="8rem" py="2rem" color="gray.300" fontSize="sm">
      <SimpleGrid columns={2} spacing={10}>
        <Logo />

        <Flex align="center" justify="flex-end">
          <Text>
            Copyrights ® {new Date().getFullYear()} jopcmelo. All rights
            reserved.
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
