import { ListItem, Link } from "@chakra-ui/react";

interface FooterItemProps {
  children: string;
  href: string;
}

export function FooterItem({ children, href }: FooterItemProps) {
  return (
    <ListItem>
      <Link href={href} isExternal fontSize="md" fontWeight="bold">
        {children}
      </Link>
    </ListItem>
  );
}
