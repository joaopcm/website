import { ElementType } from "react";
import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
  shouldMatchExactHref?: boolean;
}

export function NavLink({
  icon,
  children,
  href,
  shouldMatchExactHref = false,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink
      href={href}
      passHref
      shouldMatchExactHref={shouldMatchExactHref}
    >
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
