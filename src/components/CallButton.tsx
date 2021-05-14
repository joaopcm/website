import { Button, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaNewspaper } from "react-icons/fa";

export function CallButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/posts");
  }

  return (
    <Button
      type="button"
      h="3rem"
      borderRadius="3rem"
      bg="gray.850"
      border="0"
      px="1.5rem"
      display="flex"
      align="center"
      justify="center"
      color="white"
      fontWeight="bold"
      transition="filter 0.2s"
      _hover={{
        filter: "brightness(0.8)",
      }}
      onClick={handleClick}
    >
      <Icon as={FaNewspaper} color="#04d361" w="20px" h="20px" mr="1rem" />
      See the latest posts
    </Button>
  );
}
