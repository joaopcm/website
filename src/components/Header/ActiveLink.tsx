import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";
import { checkIsActive } from "../../utils/checkIsActive";
import { Link, LinkProps } from "../Link";

interface ActiveLinkProps extends LinkProps {
  activeClassName?: string;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  activeClassName = null,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const isActive = checkIsActive({
    shouldMatchExactHref,
    asPath,
    href: rest.href,
    as: String(rest.as),
  })

  const styles = {
    className: null,
    color: null,
  };

  if (isActive) {
    if (activeClassName) {
      styles.className = activeClassName;
    } else {
      styles.color = "brand.yellow.500";
    }
  }

  return (
    <Link {...rest}>{cloneElement(children as ReactElement, styles)}</Link>
  );
}
