import { Url } from "url";

type CheckIsActiveProps = {
  shouldMatchExactHref?: boolean;
  asPath: string;
  href: string;
  as: string;
};

export function checkIsActive({
  shouldMatchExactHref = false,
  asPath,
  href,
  as
}: CheckIsActiveProps) {
  let isActive = false;

  if (shouldMatchExactHref && (asPath === href || asPath === as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(href)) || asPath.startsWith(String(as)))
  ) {
    isActive = true;
  }

  return isActive;
}