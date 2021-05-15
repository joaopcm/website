import { Flex, Icon, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface TechnologyItemProps {
  label: string;
  icon: IconType;
  backgroundColor?: string;
  color?: string;
  iconSize?: string;
  boxSize?: string;
}

export function TechnologyItem({
  label,
  icon,
  backgroundColor = "white",
  color = "white",
  iconSize = "20px",
  boxSize = "32px",
}: TechnologyItemProps) {
  return (
    <Tooltip label={label} aria-label={label} placement="top">
      <Flex
        bg={backgroundColor}
        w={boxSize}
        h={boxSize}
        borderRadius="5px"
        align="center"
        justify="center"
      >
        <Icon as={icon} w={iconSize} h={iconSize} color={color} />
      </Flex>
    </Tooltip>
  );
}
