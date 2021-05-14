import { Box, Text } from "@chakra-ui/layout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { RichText, RichTextBlock } from "prismic-reactjs";
import { getPrismicClient } from "../../services/prismic";
import { formatDate } from "../../utils/formatDate";
import { htmlSerializer } from "../../utils/htmlSerializer";
import styles from "./post.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: RichTextBlock[];
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Joao Melo</title>
      </Head>

      <Box maxWidth="1120px" my="0" mx="auto" py="0" px="2rem">
        <Text as="article" maxWidth="720px" mt="5rem" mx="auto" mb="0">
          <Text as="h1" fontSize="3.5rem" fontWeight="900">
            {post.title}
          </Text>

          <Text
            as="time"
            fontSize="1rem"
            color="gray.300"
            mt="1.5rem"
            display="block"
          >
            {post.updatedAt}
          </Text>

          <Box
            className={styles.contentInterpolator}
            mt="2rem"
            lineHeight="2rem"
            fontSize="1.125rem"
            color="gray.100"
          >
            <RichText
              render={post.content}
              htmlSerializer={htmlSerializer}
            ></RichText>
          </Box>
        </Text>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params;
  const prismic = getPrismicClient();

  const response = await prismic.getByUID("post", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: response.data.content,
    updatedAt: formatDate(response.last_publication_date),
  };

  return {
    props: {
      post,
    },
  };
};
