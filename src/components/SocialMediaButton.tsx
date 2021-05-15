import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SocialMediaButtonProps {
  href: string;
  icon: IconType;
  title: string;
}

export function SocialMediaButton({
  href,
  icon,
  title,
}: SocialMediaButtonProps) {
  return (
    <Link
      href={href}
      bg="gray.700"
      p="2"
      borderRadius="5"
      transition="filter 0.2s"
      _hover={{
        filter: "brightness(1.2)",
      }}
      isExternal
    >
      <Flex align="center" justify="center">
        <Icon as={icon} mr="3" w="20px" h="20px" />
        <Text>{title}</Text>
      </Flex>
    </Link>
  );
}
