import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Box, Link, Text } from "@chakra-ui/react";
import styles from "./posts.module.scss";
import { getPrismicClient } from "../../services/prismic";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Joao Melo</title>
      </Head>

      <Box maxWidth="1120px" my="0" mx="auto" py="0" px="2rem">
        <Box
          maxWidth="720px"
          mt="5rem"
          mx="auto"
          mb="0"
          className={styles.postsWrapper}
        >
          <Link display="block" href="#" _hover={{ textDecoration: "none" }}>
            <Text
              as="time"
              fontSize="1rem"
              display="flex"
              align="center"
              color="gray.300"
            >
              March 12th 2021
            </Text>
            <Text
              as="strong"
              display="block"
              fontSize="1.5rem"
              mt="1rem"
              lineHeight="2rem"
              transition="color 0.2s"
            >
              Lorem impsum dolor
            </Text>
            <Text as="p" color="gray.300" mt="0.5rem" lineHeight="1.625rem">
              Lorem impsum dolor sit amet, consectetur adipiscing elit
            </Text>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "post")],
    { fetch: ["post.title", "post.content"], pageSize: 25 }
  );

  console.log(response);

  return {
    props: {},
  };
};
