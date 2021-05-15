import { Box, Text } from "@chakra-ui/layout";
import { GetServerSideProps } from "next";
import { RichText, RichTextBlock } from "prismic-reactjs";
import { SEO } from "../../components/SEO";
import { getPrismicClient } from "../../services/prismic";
import { formatDate } from "../../utils/formatDate";
import { htmlSerializer } from "../../utils/htmlSerializer";
import styles from "../../styles/contentInterpolator.module.scss";

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
      <SEO
        title={`${post.title} | Joao Melo`}
        description={
          post.content.find((content) => content.type === "paragraph")?.text ??
          ""
        }
      />

      <Box maxWidth="1120px" my="0" mx="auto" py="0" px="2rem">
        <Text
          as="article"
          maxWidth="720px"
          mt={["2rem", "5rem"]}
          mx="auto"
          mb="0"
        >
          <Text
            as="h1"
            fontSize={["2.5rem", "3.5rem"]}
            lineHeight={["3rem", "4rem"]}
            fontWeight="900"
          >
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
            mt="1.5rem"
            lineHeight={["1.5rem", "2rem"]}
            fontSize={["1rem", "1.125rem"]}
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
