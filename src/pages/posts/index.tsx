import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { FiCalendar, FiUser } from "react-icons/fi";
import { getPrismicClient } from "../../services/prismic";
import { formatDate } from "../../utils/formatDate";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { SEO } from "../../components/SEO";
import { PostInfo } from "../../components/Post/PostInfo";
import { PostInfoItem } from "../../components/Post/PostInfoItem";
import styles from "./posts.module.scss";

interface PostsProps {
  posts: Post[];
}

type Post = {
  slug: string;
  headline: string;
  subtitle: string;
  author: string;
  createdAt: string;
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
                  as="strong"
                  display="block"
                  fontSize="1.5rem"
                  mt="1rem"
                  lineHeight="2rem"
                  transition="color 0.2s"
                >
                  {post.headline}
                </Text>
                <Text as="p" color="gray.300" mt="0.5rem" lineHeight="1.625rem">
                  {post.subtitle}
                </Text>

                <PostInfo useResponsivity={false}>
                  <PostInfoItem icon={FiCalendar} text={post.createdAt} />
                  <PostInfoItem icon={FiUser} text={post.author} />
                </PostInfo>
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
    {
      fetch: ["post.headline", "post.subtitle", "post.author"],
      pageSize: 25,
    }
  );

  const posts = response.results.map((post) => ({
    slug: post.uid,
    headline: post.data.headline,
    subtitle: post.data.subtitle,
    author: post.data.author,
    createdAt: formatDate(post.first_publication_date),
  }));

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
