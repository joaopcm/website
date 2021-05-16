import {
  Box,
  Heading,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { RichText, RichTextBlock } from "prismic-reactjs";
import { RichText as RichTextDom } from "prismic-dom";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";
import { SEO } from "../../components/SEO";
import { getPrismicClient } from "../../services/prismic";
import { formatDate } from "../../utils/formatDate";
import { htmlSerializer } from "../../utils/htmlSerializer";
import styles from "../../styles/contentInterpolator.module.scss";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { PostInfo } from "../../components/Post/PostInfo";
import { PostInfoItem } from "../../components/Post/PostInfoItem";

interface PostProps {
  post: {
    slug: string;
    banner: {
      alt: string;
      url: string;
    };
    headline: string;
    subtitle: string;
    author: string;
    details: Detail[];
    createdAt: string;
    readingMinutes: string;
  };
}

type Detail = {
  heading: string;
  body: RichTextBlock[];
};

export default function Post({ post }: PostProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <SEO
        title={`${post.headline} | Joao Melo`}
        description={post.subtitle}
        previewImageURL={post.banner.url}
      />

      {isWideScreen && (
        <Image
          src={post.banner.url}
          alt={post.banner.alt}
          fallbackSrc="https://via.placeholder.com/1440x400?text=Loading+image..."
          mb="5rem"
        />
      )}

      <Container>
        <Content>
          <Text as="article" mx="auto" mb="0">
            <Text
              as="h1"
              fontSize={["2.5rem", "3.5rem"]}
              lineHeight={["3rem", "4rem"]}
              fontWeight="900"
            >
              {post.headline}
            </Text>

            <PostInfo>
              <PostInfoItem icon={FiCalendar} text={post.createdAt} />
              <PostInfoItem icon={FiUser} text={post.author} />
              <PostInfoItem icon={FiClock} text={post.readingMinutes} />
            </PostInfo>

            <Box
              className={styles.contentInterpolator}
              mt="4.125rem"
              lineHeight={["1.5rem", "2rem"]}
              fontSize={["1rem", "1.125rem"]}
              color="gray.100"
            >
              {post.details.map((detail, index) => (
                <Box key={index}>
                  <Heading as="h1" fontSize="5xl">
                    {detail.heading}
                  </Heading>

                  <RichText
                    render={detail.body}
                    htmlSerializer={htmlSerializer}
                  />
                </Box>
              ))}
            </Box>
          </Text>
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;
  const prismic = getPrismicClient();

  const response = await prismic.getByUID("post", String(slug), {});

  const amountOfWords = response.data.details.reduce(
    (accumulator, { heading, body }) => {
      const headingWords = heading.split(" ").length;
      const bodyWords = RichTextDom.asText(body).split(" ").length;

      accumulator += headingWords + bodyWords;

      return accumulator;
    },
    0
  );

  const humanAverageReadingPerMinute = 200;
  const readingMinutes = Math.ceil(
    amountOfWords / humanAverageReadingPerMinute
  );

  const post = {
    slug,
    banner: {
      alt: response.data.banner.alt,
      url: response.data.banner.url,
    },
    headline: response.data.headline,
    subtitle: response.data.subtitle,
    author: response.data.author,
    details: response.data.details,
    createdAt: formatDate(response.first_publication_date),
    readingMinutes: `${readingMinutes} min`,
  };

  return {
    props: {
      post,
    },
  };
};
