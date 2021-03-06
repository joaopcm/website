import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <Box
      maxWidth="1120px"
      my="0"
      mx="auto"
      py="0"
      px="2rem"
      minHeight="calc(100vh - 5rem)"
    >
      {children}
    </Box>
  );
}
