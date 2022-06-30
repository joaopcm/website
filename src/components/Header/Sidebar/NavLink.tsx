import { ElementType } from "react";
import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
  useColorMode,
} from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";
import { useRouter } from "next/router";
import { checkIsActive } from "../../../utils/checkIsActive";

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
  const { colorMode } = useColorMode();
  const { asPath } = useRouter();
  const isActive = checkIsActive({
    shouldMatchExactHref,
    asPath,
    href,
    as: String(rest.as)
  });

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
        <Text
          transition="color 0.2s"
          color={colorMode === 'dark' && isActive ? 'white': colorMode === 'dark' ? 'brand.gray.300' : undefined}
          _hover={{
            color: colorMode === 'dark' ? 'white' : undefined
          }}
          ml={icon ? 4 : 0}
        >
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
