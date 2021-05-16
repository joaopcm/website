import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PostInfoProps {
  children: ReactNode;
  useResponsivity?: boolean;
}

export function PostInfo({ children, useResponsivity = true }: PostInfoProps) {
  return (
    <Stack
      mt="1.5625rem"
      spacing={["1rem", "1.5rem"]}
      direction={!useResponsivity ? "row" : ["column", "row"]}
      align="flex-start"
    >
      {children}
    </Stack>
  );
}
