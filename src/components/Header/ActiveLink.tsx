import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  activeClassName,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let className = "";

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    className = activeClassName;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    className = activeClassName;
  }

  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
}
