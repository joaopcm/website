import { Text, VStack, Link as ChakraLink, Box } from "@chakra-ui/react";
import Link from "next/link";

interface PostNavigationItemProps {
  post?: Post;
  description: string;
  alignItems?: "center" | "flex-start" | "flex-end";
}

type Post = {
  headline: string;
  slug: string;
};

export function PostNavigationItem({
  post,
  description,
  alignItems = "center",
}: PostNavigationItemProps) {
  return (
    <Box>
      {post && (
        <Link href={`/posts/${post.slug}`}>
          <ChakraLink _hover={{ textDecoration: "none" }}>
            <VStack alignItems={alignItems}>
              <Text fontSize="1.125rem">{post.headline}</Text>
              <Text color="yellow.500" fontWeight="bold">
                {description}
              </Text>
            </VStack>
          </ChakraLink>
        </Link>
      )}
    </Box>
  );
}
