import { Text, VStack, Box } from "@chakra-ui/react";
import { Link } from "../Link";

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
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <VStack alignItems={alignItems}>
            <Text fontSize="1.125rem">{post.headline}</Text>
            <Text color="brand.yellow.500" fontWeight="bold">
              {description}
            </Text>
          </VStack>
        </Link>
      )}
    </Box>
  );
}
