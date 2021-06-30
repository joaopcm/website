import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import { FaHome, FaNewspaper, FaProjectDiagram } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import styles from "../styles.module.scss";

export function SidebarNav() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const routes = [
    {
      section: "GENERAL",
      path: "/",
      icon: FaHome,
      shouldMatchExactHref: true,
      text: "Home",
    },
    {
      section: "BLOG",
      path: "/posts",
      icon: FaNewspaper,
      shouldMatchExactHref: false,
      text: "Posts",
    },
    {
      section: "PORTFOLIO",
      path: "/projects",
      icon: FaProjectDiagram,
      shouldMatchExactHref: false,
      text: "Projects",
    },
  ];
  const sections = Array.from(new Set(routes.map((route) => route.section)));

  if (!isWideScreen) {
    return (
      <Stack spacing="10" algin="flex-start">
        {sections.map((section, index) => (
          <NavSection key={index} title={section}>
            {routes.flatMap((route) =>
              route.section === section ? (
                <NavLink
                  key={route.path}
                  href={route.path}
                  icon={route.icon}
                  shouldMatchExactHref={route.shouldMatchExactHref}
                >
                  {route.text}
                </NavLink>
              ) : (
                []
              )
            )}
          </NavSection>
        ))}
      </Stack>
    );
  }

  return (
    <Box as="nav">
      {routes.map((route) => (
        <NavLink
          key={route.path}
          href={route.path}
          shouldMatchExactHref={route.shouldMatchExactHref}
          activeClassName={styles.active}
        >
          {route.text}
        </NavLink>
      ))}
    </Box>
  );
}
