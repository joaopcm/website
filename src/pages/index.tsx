import Head from "next/head";
import Link from "next/link";
import {
  Flex,
  Box,
  Text,
  Heading,
  Image,
  useBreakpointValue,
  Button as ChakraButton,
} from "@chakra-ui/react";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Home | Joao Melo</title>
      </Head>

      <Flex
        as="main"
        maxWidth="1120px"
        my="0"
        mx="auto"
        py="0"
        px="2rem"
        h="calc(100vh - 5rem)"
        align="center"
        justify="space-between"
      >
        <Box maxWidth="600px" as="section">
          <Text fontSize="1.5rem" fontWeight="bold" as="span">
            👏 Hey, welcome
          </Text>

          <Heading
            as="h1"
            fontSize={["3rem", "4.5rem"]}
            lineHeight={["3rem", "4.5rem"]}
            fontWeight="900"
            mt={["1.5rem", "2.5rem"]}
          >
            Know me and{" "}
            <Text color="cyan.500" as="span">
              share
            </Text>{" "}
            knowledge.
          </Heading>

          <Text
            fontSize={["1rem", "1.5rem"]}
            lineHeight={["1rem", "1.5rem"]}
            mt={["1rem", "1.5rem"]}
            mb={["1.5rem", "2.5rem"]}
          >
            Get access to all the posts <br />
            <Text color="cyan.500" fontWeight="bold" mt="0.5rem" as="span">
              for free
            </Text>
          </Text>

          <Link href="/posts">
            <ChakraButton
              h="4rem"
              w={["100%", "260px"]}
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
            >
              Read all contents
            </ChakraButton>
          </Link>
        </Box>

        {isWideVersion && (
          <Image src="/images/avatar.svg" alt="Man coding" boxSize="400px" />
        )}
      </Flex>
    </>
  );
}
