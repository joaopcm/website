import {
  Grid,
  GridItem,
  Flex,
  Text,
  Heading,
  Avatar,
  HStack,
  SimpleGrid,
  Stack,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
  FaStackOverflow,
} from "react-icons/fa";
import {
  SiCss3,
  SiGithubactions,
  SiGo,
  SiGraphql,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextDotJs,
  SiPhp,
  SiPostgresql,
  SiRedis,
  SiSocketDotIo,
  SiTypescript,
  SiVueDotJs,
} from "react-icons/si";
import { BsEnvelopeFill } from "react-icons/bs";
import { RiEyeFill } from "react-icons/ri";

import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { TechnologyItem } from "../../components/TechnologyItem";
import { SocialMediaButton } from "../../components/SocialMediaButton";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

export default function About() {
  function handleDownloadResume() {
    window.open(
      "https://drive.google.com/file/d/1J0OcU4OJKOKX_6cJ9wCRXlDJXmPIjmzV/view?usp=sharing"
    );
  }

  return (
    <>
      <Head>
        <title>About me | Joao Melo</title>
      </Head>

      <Container>
        <Content maxWidth="100%">
          <Grid templateColumns="repeat(12, 1fr)" gap={6} mb="8">
            <GridItem colSpan={[12, null, 4]}>
              <Flex
                bg="gray.800"
                borderRadius="8"
                direction="column"
                p="8"
                align="center"
              >
                <Avatar
                  name="Joao Melo"
                  src="/images/profile.jpeg"
                  size="2xl"
                  showBorder
                />
                <Heading as="h1" fontSize="1.5rem" mt="4">
                  Joao Melo
                </Heading>
                <Text color="gray.100" mt="8">
                  Software Engineer
                </Text>
                <Text color="gray.100" mt="2" mb="6">
                  Sao Paulo, SP, Brazil
                </Text>

                <Button
                  text="See resume"
                  textColor="black"
                  icon={RiEyeFill}
                  iconColor="black"
                  onClick={handleDownloadResume}
                  backgroundColor="yellow.500"
                />
              </Flex>
            </GridItem>

            <GridItem colSpan={[12, null, 8]}>
              <Card>
                <Heading as="h1" fontSize="1.5rem">
                  About me
                </Heading>

                <Text my="8" pl="4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pretium nisl eu sem gravida imperdiet. Sed a ante et diam
                  fermentum tempor. Fusce sed facilisis ligula. Ut eu magna et
                  urna porttitor sollicitudin et vitae nulla. Duis dapibus eros
                  dui, nec posuere neque gravida vel. In lectus lectus, dictum
                  id pharetra eget, lobortis eu arcu. Morbi dictum egestas
                  sollicitudin. Quisque ac mi in sapien vehicula tristique.
                  Nullam consectetur facilisis odio, eu pulvinar neque rhoncus
                  et. Nulla feugiat, enim vel pretium posuere, arcu libero
                  efficitur dolor, pulvinar lacinia libero arcu eu dui.
                </Text>

                <Stack direction={["column", null, null, "row"]}>
                  <SocialMediaButton
                    href="https://github.com/joaopcm"
                    icon={FaGithub}
                    title="GitHub"
                  />
                  <SocialMediaButton
                    href="https://www.linkedin.com/in/joaopcm/"
                    icon={FaLinkedin}
                    title="LinkedIn"
                  />
                  <SocialMediaButton
                    href="https://stackoverflow.com/users/15531692/jo%c3%a3o-melo"
                    icon={FaStackOverflow}
                    title="StackOverflow"
                  />
                  <SocialMediaButton
                    href="mailto:jopcmelo@gmail.com"
                    icon={BsEnvelopeFill}
                    title="Email"
                  />
                </Stack>
              </Card>
            </GridItem>

            <GridItem colSpan={12}>
              <Card>
                <Heading as="h1" fontSize="1.5rem">
                  Technologies
                </Heading>

                <Box>
                  <Heading as="h2" fontSize="1.25rem" my="1rem">
                    Experienced
                  </Heading>

                  <SimpleGrid minChildWidth="50px" spacing={2}>
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="NodeJS"
                      icon={FaNodeJs}
                      backgroundColor="#8CC84A"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="JavaScript"
                      icon={SiJavascript}
                      backgroundColor="yellow.500"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="TypeScript"
                      icon={SiTypescript}
                      backgroundColor="#2E88D1"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="ReactJS"
                      icon={FaReact}
                      backgroundColor="#40C0DD"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="NextJS"
                      icon={SiNextDotJs}
                      backgroundColor="#000"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="VueJS"
                      icon={SiVueDotJs}
                      backgroundColor="#41B883"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="React Native"
                      icon={FaReact}
                      backgroundColor="#40C0DD"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="Jest"
                      icon={SiJest}
                      backgroundColor="#F4511D"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="Socket.io"
                      icon={SiSocketDotIo}
                      backgroundColor="#010101"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="GraphQL"
                      icon={SiGraphql}
                      backgroundColor="#E535AB"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="HTML"
                      icon={SiHtml5}
                      backgroundColor="#DD4D25"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="CSS"
                      icon={SiCss3}
                      backgroundColor="#61DAFB"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="PostgreSQL"
                      icon={SiPostgresql}
                      color="#326690"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="MongoDB"
                      icon={SiMongodb}
                      color="#429543"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="Redis"
                      icon={SiRedis}
                      color="#B72C28"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="MySQL"
                      icon={SiMysql}
                      backgroundColor="#4479A1"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="PHP"
                      icon={SiPhp}
                      backgroundColor="#777BB3"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="Python"
                      icon={FaPython}
                      backgroundColor="#2B5B84"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="Amazon Web Services"
                      icon={FaAws}
                      backgroundColor="#252F3E"
                      color="yellow.500"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="Heroku"
                      icon={SiHeroku}
                      backgroundColor="#430098"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="Docker"
                      icon={FaDocker}
                      backgroundColor="#2D87C9"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="GitHub Actions"
                      icon={SiGithubactions}
                      backgroundColor="#3A3A3A"
                      color="blue.500"
                    />
                  </SimpleGrid>
                </Box>

                <Box>
                  <Heading as="h2" fontSize="1.25rem" my="1rem">
                    Interested in
                  </Heading>

                  <HStack>
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="Kubernetes"
                      icon={SiKubernetes}
                      backgroundColor="#3069DE"
                    />
                    <TechnologyItem
                      boxSize="50px"
                      iconSize="30px"
                      label="Go"
                      icon={SiGo}
                      backgroundColor="#38A7D0"
                    />
                  </HStack>
                </Box>
              </Card>
            </GridItem>
          </Grid>
        </Content>
      </Container>
    </>
  );
}
