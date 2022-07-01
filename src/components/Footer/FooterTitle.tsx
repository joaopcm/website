import { Heading, useColorMode } from "@chakra-ui/react";
import { ReactElement } from "react";

interface FooterTitleProps {
  children: string;
}

export function FooterTitle({ children }: FooterTitleProps) {
  const { colorMode } = useColorMode();

  return (
    <Heading
      as="h1"
      size="sm"
      color={colorMode === 'dark' ? 'brand.gray.300' : 'blackAlpha.600'}
      textTransform="uppercase"
      mb="1rem"
    >
      {children}
    </Heading>
  );
}
