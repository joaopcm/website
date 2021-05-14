import Head from "next/head";
import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import { HomeCallButton } from "../components/HomeCallButton";

export default function Home() {
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
            fontSize="4.5rem"
            lineHeight="4.5rem"
            fontWeight="900"
            mt="2.5rem"
          >
            Know me and{" "}
            <Text color="cyan.500" as="span">
              share
            </Text>{" "}
            knowledge.
          </Heading>

          <Text fontSize="1.5rem" lineHeight="1.5rem" mt="1.5rem" mb="2.5rem">
            Get access to all the posts <br />
            <Text color="cyan.500" fontWeight="bold" mt="0.5rem">
              for free
            </Text>
          </Text>
          <HomeCallButton />
        </Box>

        <Image src="/images/avatar.svg" alt="Man coding" boxSize="400px" />
      </Flex>
    </>
  );
}
