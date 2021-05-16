import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
}

export function Content({
  children,
  className,
  maxWidth = "720px",
}: ContentProps) {
  return (
    <Box
      maxWidth={maxWidth}
      mt={["2rem", "5rem"]}
      mx="auto"
      mb="0"
      className={className}
    >
      {children}
    </Box>
  );
}
