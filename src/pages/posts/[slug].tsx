import {
  Box,
  Heading,
  Text,
  Image,
  useBreakpointValue,
  Divider,
  Center,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { RichText, RichTextBlock } from "prismic-reactjs";
import { RichText as RichTextDom } from "prismic-dom";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";
import Link from "next/link";
import Prismic from "@prismicio/client";
import { SEO } from "../../components/SEO";
import { getPrismicClient } from "../../services/prismic";
import { formatDate } from "../../utils/formatDate";
import { htmlSerializer } from "../../utils/htmlSerializer";
import styles from "../../styles/contentInterpolator.module.scss";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { PostInfo } from "../../components/Post/PostInfo";
import { PostInfoItem } from "../../components/Post/PostInfoItem";
import { Comments } from "../../components/Comments";
import { Button } from "../../components/Button";
import { PostNavigation } from "../../components/Post/PostNavigation";

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
  previousPost?: PostNavigationItem;
  nextPost?: PostNavigationItem;
  preview?: boolean;
}

type Detail = {
  heading: string;
  body: RichTextBlock[];
};

type PostNavigationItem = {
  headline: string;
  slug: string;
};

export default function Post({
  previousPost,
  post,
  nextPost,
  preview,
}: PostProps) {
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
          fallbackSrc="https://via.placeholder.com/1920x400?text=Loading+image..."
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

          <Divider borderColor="gray.800" mt="3.75rem" mb="3.125rem" />

          {previousPost ||
            (nextPost && (
              <PostNavigation
                mb={["2.5rem", "5rem"]}
                previousPost={previousPost}
                nextPost={nextPost}
              />
            ))}

          <Comments />

          {preview && (
            <Center mb="1.5rem">
              <Link href="/api/exit-preview">
                <Button
                  text="Exit preview mode"
                  backgroundColor="white"
                  textColor="gray.900"
                />
              </Link>
            </Center>
          )}
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const { slug } = params;
  const prismic = getPrismicClient();

  const response = await prismic.getByUID("post", String(slug), {
    ref: (typeof previewData === "object" && previewData["ref"]) ?? null,
  });

  const queryPredicates = [Prismic.Predicates.at("document.type", "post")];
  const queryOptions = {
    fetch: ["post.headline"],
    pageSize: 1,
    after: response.id,
    orderings: "[document.first_publication_date desc]",
    ref: (typeof previewData === "object" && previewData["ref"]) ?? null,
  };

  const previousPostResponse = (
    await prismic.query(queryPredicates, queryOptions)
  ).results[0];

  const nextPostResponse = (
    await prismic.query(queryPredicates, {
      ...queryOptions,
      orderings: "[document.first_publication_date]",
    })
  ).results[0];

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

  const nextPost = nextPostResponse
    ? {
        headline: nextPostResponse.data.headline,
        slug: nextPostResponse.uid,
      }
    : null;

  const previousPost = previousPostResponse
    ? {
        headline: previousPostResponse.data.headline,
        slug: previousPostResponse.uid,
      }
    : null;

  return {
    props: {
      post,
      previousPost,
      nextPost,
      preview,
    },
  };
};
