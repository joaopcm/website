import { HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PostInfoProps {
  children: ReactNode;
}

export function PostInfo({ children }: PostInfoProps) {
  return (
    <HStack mt="25px" spacing="1.5rem">
      {children}
    </HStack>
  );
}
