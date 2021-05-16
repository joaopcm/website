import { Flex, FlexProps } from "@chakra-ui/react";
import { PostNavigationItem } from "./PostNavigationItem";

interface PostNavigationProps extends FlexProps {
  previousPost?: Post;
  nextPost?: Post;
}

type Post = {
  headline: string;
  slug: string;
};

export function PostNavigation({
  previousPost = null,
  nextPost = null,
  ...rest
}: PostNavigationProps) {
  return (
    <Flex justify="space-between" {...rest}>
      <PostNavigationItem
        post={previousPost}
        description="Previous post"
        alignItems="flex-start"
      />

      <PostNavigationItem
        post={nextPost}
        description="Next post"
        alignItems="flex-end"
      />
    </Flex>
  );
}
