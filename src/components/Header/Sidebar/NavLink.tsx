import { ElementType } from "react";
import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon?: ElementType;
  children: string;
  href: string;
  shouldMatchExactHref?: boolean;
  activeClassName?: string;
}

export function NavLink({
  icon,
  children,
  href,
  shouldMatchExactHref = false,
  activeClassName,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink
      href={href}
      passHref
      shouldMatchExactHref={shouldMatchExactHref}
      activeClassName={activeClassName}
    >
      <ChakraLink
        display="flex"
        align="center"
        _hover={{
          textDecoration: "none",
        }}
        {...rest}
      >
        {icon && <Icon as={icon} fontSize="20" />}
        <Text ml={icon ? 4 : 0}>{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}
