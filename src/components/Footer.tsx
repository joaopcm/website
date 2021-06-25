import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Logo } from "./Header/Logo";

export function Footer() {
  return (
    <Box
      bgColor="black"
      px={["2rem", "6rem"]}
      py="2rem"
      color="gray.300"
      fontSize="sm"
    >
      <SimpleGrid columns={[1, 2]} spacing={10}>
        <Box display={["none", "block"]}>
          <Logo />
        </Box>

        <Flex align="center" justify={["center", "flex-end"]}>
          <Text>
            Copyrights ® {new Date().getFullYear()} jopcmelo. All rights
            reserved.
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
