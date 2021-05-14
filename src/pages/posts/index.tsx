import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Box, Link as ChakraLink, Text } from "@chakra-ui/react";
import { RichText } from "prismic-dom";
import styles from "./posts.module.scss";
import { getPrismicClient } from "../../services/prismic";
import { formatDate } from "../../utils/formatDate";

interface PostsProps {
  posts: Post[];
}

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

export default function Posts({ posts }: PostsProps) {
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
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <ChakraLink display="block" _hover={{ textDecoration: "none" }}>
                <Text
                  as="time"
                  fontSize="1rem"
                  display="flex"
                  align="center"
                  color="gray.300"
                >
                  {post.updatedAt}
                </Text>
                <Text
                  as="strong"
                  display="block"
                  fontSize="1.5rem"
                  mt="1rem"
                  lineHeight="2rem"
                  transition="color 0.2s"
                >
                  {post.title}
                </Text>
                <Text as="p" color="gray.300" mt="0.5rem" lineHeight="1.625rem">
                  {post.excerpt}
                </Text>
              </ChakraLink>
            </Link>
          ))}
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

  const posts = response.results.map((post) => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    excerpt:
      post.data.content.find((content) => content.type === "paragraph")?.text ??
      "",
    updatedAt: formatDate(post.last_publication_date),
  }));

  return {
    props: {
      posts,
    },
  };
};
