import {
  Text,
  Icon,
  Tag,
  TagLabel,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { FaJs, FaHtml5, FaPython, FaCss3 } from "react-icons/fa";
import { SiTypescript, SiFlutter, SiShell } from "react-icons/si";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { Link } from "../../components/Link";
import { SEO } from "../../components/SEO";
import { githubAPI } from "../../services/github";
import { formatDate } from "../../utils/formatDate";
import styles from "./projects.module.scss";

interface ProjectsProps {
  projects: Project[];
}

type Project = {
  id: number;
  name: string;
  url: string;
  description: string;
  updatedAt: string;
  language: string;
};

type GitHubRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
  language: string;
};

export default function Projects({ projects }: ProjectsProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const languageIcons = {
    JavaScript: <Icon as={FaJs} />,
    HTML: <Icon as={FaHtml5} />,
    Python: <Icon as={FaPython} />,
    CSS: <Icon as={FaCss3} />,
    TypeScript: <Icon as={SiTypescript} />,
    Dart: <Icon as={SiFlutter} />,
    Shell: <Icon as={SiShell} />,
  };
  const languageColors = {
    JavaScript: "yellow.400",
    HTML: "red.600",
    Python: "blue.500",
    CSS: "blue.500",
    TypeScript: "blue.500",
    Dart: "blue.500",
    Shell: "brand.green.500",
    // TODO add more languages here
  };

  return (
    <>
      <SEO
        title="Projects | João Melo"
        description="All of my open source projects"
      />

      <Container>
        <Content className={styles.projectsWrapper}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              as={project.url}
              isExternal
              display="block"
              _hover={{ textDecoration: "none" }}
            >
              <Text
                as="time"
                fontSize="1rem"
                display="flex"
                align="center"
                color="gray.300"
              >
                {project.updatedAt}
              </Text>
              <Text
                as="strong"
                fontSize="1.5rem"
                mt="1rem"
                display="block"
                lineHeight="2rem"
                transition="color 0.2s"
              >
                {project.name}
              </Text>
              <Tag bg={languageColors[project.language]} mt="0.5rem">
                {languageIcons[project.language]}
                <TagLabel ml="1">{project.language}</TagLabel>
              </Tag>

              {project.description && (
                <Text as="p" color="gray.300" mt="0.5rem" lineHeight="1.625rem">
                  {project.description}
                </Text>
              )}
            </Link>
          ))}

          <Box
            p={["1rem", "2rem"]}
            textAlign="center"
            bg="gray.850"
            borderRadius="100px"
            fontSize={["1.125rem", "1.25rem"]}
            fontWeight="bold"
            mt={["3rem", "4rem"]}
            mx="0"
            mb="2rem"
          >
            {isWideScreen && (
              <Text as="span">Wanna see more awesome projects?</Text>
            )}
            <Link
              href="https://github.com/joaopcm"
              color="brand.yellow.500"
              ml="0.5rem"
              _hover={{ textDecoration: "none" }}
              isExternal
            >
              Visit my GitHub profile 🤗
            </Link>
          </Box>
        </Content>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await githubAPI.get<GitHubRepository[]>(
    "/users/joaopcm/repos?sort=created"
  );

  const projects = response.data
    .filter((repository) => repository.language !== null)
    .map((repository) => ({
      id: repository.id,
      name: repository.name,
      url: repository.html_url,
      description: repository.description,
      updatedAt: formatDate(repository.updated_at),
      language: repository.language,
    }));

  return {
    props: {
      projects: projects,
    },
    revalidate: 60 * 60 * 24 * 1, // 1 day
  };
};
