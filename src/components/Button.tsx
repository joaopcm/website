import {
  Button as ChakraButton,
  Icon,
  Text,
  ButtonProps as ChakraButtonProps,
  useColorMode,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ButtonProps extends ChakraButtonProps {
  backgroundColor?: string;
  onClick?: () => void;
  icon?: IconType;
  iconColor?: string;
  text: string;
  textColor?: string;
}

export function Button({
  backgroundColor = "gray.800",
  onClick = () => {},
  icon,
  iconColor = "white",
  text,
  textColor = "white",
  ...rest
}: ButtonProps) {
  const { colorMode } = useColorMode();

  return (
    <ChakraButton
      type="button"
      h="3rem"
      borderRadius="3rem"
      bg={backgroundColor}
      border="0"
      px="1.5rem"
      display="flex"
      align="center"
      justify="center"
      color="white"
      fontWeight="bold"
      transition="filter 0.2s"
      _hover={{
        filter: `brightness(0.${colorMode === 'light' ? 9 : 8})`,
      }}
      onClick={onClick}
      {...rest}
    >
      {icon && <Icon as={icon} color={iconColor} w="20px" h="20px" mr="1rem" />}
      <Text color={textColor}>{text}</Text>
    </ChakraButton>
  );
}
