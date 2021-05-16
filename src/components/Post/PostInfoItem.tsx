import { Icon, Flex, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PostInfoItemProps {
  icon: IconType;
  text: string;
}

export function PostInfoItem({ icon, text }: PostInfoItemProps) {
  return (
    <Flex align="center" justify="center" color="gray.300">
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
