import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function HomeCallButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/posts");
  }

  return (
    <Button
      h="4rem"
      w="260px"
      border="0"
      borderRadius="2rem"
      bg="yellow.500"
      color="gray.900"
      fontSize="1.12rem"
      fontWeight="bold"
      display="flex"
      align="center"
      justify="center"
      transition="filter 0.2s"
      _hover={{
        filter: "brightness(0.8)",
      }}
      onClick={handleClick}
    >
      Read all contents
    </Button>
  );
}
