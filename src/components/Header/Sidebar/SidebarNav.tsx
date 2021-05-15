import { Stack } from "@chakra-ui/react";
import { FaHome, FaNewspaper } from "react-icons/fa";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  return (
    <Stack spacing="12" algin="flex-start">
      <NavSection title="GENERAL">
        <NavLink href="/" icon={FaHome} shouldMatchExactHref>
          Home
        </NavLink>
        <NavLink href="/posts" icon={FaNewspaper}>
          Posts
        </NavLink>
      </NavSection>
    </Stack>
  );
}
