import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export interface LinkProps
  extends PropsWithChildren<NextLinkProps & Omit<ChakraLinkProps, "as">> {}

export function Link({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  _hover,
  ...chakraProps
}: LinkProps) {
  return (
    <NextLink
      passHref
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
    >
      <ChakraLink
        {...chakraProps}
        _hover={{ ..._hover, textDecoration: "none" }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
}
