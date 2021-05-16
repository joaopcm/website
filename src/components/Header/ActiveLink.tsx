import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";
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
  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  let styles = {
    className: null,
    color: null,
  };

  if (isActive) {
    if (activeClassName) {
      styles.className = activeClassName;
    } else {
      styles.color = "yellow.500";
    }
  }

  return (
    <Link {...rest}>{cloneElement(children as ReactElement, styles)}</Link>
  );
}
