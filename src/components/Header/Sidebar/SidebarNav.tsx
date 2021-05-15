import { Stack } from "@chakra-ui/react";
import { FaHome, FaNewspaper, FaProjectDiagram } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
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
        <NavLink href="/projects" icon={FaProjectDiagram}>
          Projects
        </NavLink>
        <NavLink href="/about" icon={BsFillPersonFill}>
          About me
        </NavLink>
      </NavSection>
    </Stack>
  );
}
