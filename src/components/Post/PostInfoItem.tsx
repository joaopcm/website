import { Icon, Flex, Text, useColorMode } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PostInfoItemProps {
  icon: IconType;
  text: string;
}

export function PostInfoItem({ icon, text }: PostInfoItemProps) {
  const { colorMode } = useColorMode();

  return (
    <Flex
      align="center"
      justify="center"
      color={colorMode === "dark" ? "brand.gray.300" : "blackAlpha.700"}
    >
      <Icon as={icon} mr="0.65625rem" />
      <Text
        as="span"
        fontSize="0.875rem"
        lineHeight="0.875rem"
        display="flex"
        align="center"
      >
        {text}
      </Text>
    </Flex>
  );
}
