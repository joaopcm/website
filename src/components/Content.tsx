import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
  className?: string;
}

export function Content({ children, className }: ContentProps) {
  return (
    <Box maxWidth="720px" mt="5rem" mx="auto" mb="0" className={className}>
      {children}
    </Box>
  );
}
