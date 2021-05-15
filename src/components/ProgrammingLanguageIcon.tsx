import { Flex, Icon, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ProgrammingLanguageIconProps {
  label: string;
  icon: IconType;
  backgroundColor?: string;
  color?: string;
}

export function ProgrammingLanguageIcon({
  label,
  icon,
  backgroundColor = "white",
  color = "white",
}: ProgrammingLanguageIconProps) {
  return (
    <Tooltip label={label} aria-label={label} placement="top">
      <Flex
        bg={backgroundColor}
        w="32px"
        h="32px"
        borderRadius="5px"
        align="center"
        justify="center"
      >
        <Icon as={icon} w="20px" h="20px" color={color} />
      </Flex>
    </Tooltip>
  );
}
