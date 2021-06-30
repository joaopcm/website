import { Heading } from "@chakra-ui/react";
import { ReactElement } from "react";

interface FooterTitleProps {
  children: string;
}

export function FooterTitle({ children }: FooterTitleProps) {
  return (
    <Heading
      as="h1"
      size="sm"
      color="gray.300"
      textTransform="uppercase"
      mb="1rem"
    >
      {children}
    </Heading>
  );
}
