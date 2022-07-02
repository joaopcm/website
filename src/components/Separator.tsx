import { Box, useColorMode } from "@chakra-ui/react";

export function Separator() {
  const { colorMode } = useColorMode();

  return (
    <Box
      mt="2rem"
      mb="2rem"
      border="1px"
      borderColor={colorMode === "dark" ? "brand.gray.700" : "blackAlpha.100"}
    />
  );
}
