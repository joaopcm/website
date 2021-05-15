import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import { formatDate } from "../../utils/formatDate";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import styles from "./posts.module.scss";
import { SEO } from "../../components/SEO";

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
      <SEO
        title="Posts | Joao Melo"
        description="Technology publications from zero to hero. For free."
      />

      <Container>
        <Content className={styles.postsWrapper}>
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
        </Content>
      </Container>
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
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
