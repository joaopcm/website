import {
  Grid,
  GridItem,
  Flex,
  Text,
  Heading,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import {
  FaAws,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaStackOverflow,
} from "react-icons/fa";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { BsEnvelopeFill } from "react-icons/bs";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { ProgrammingLanguageIcon } from "../../components/ProgrammingLanguageIcon";
import { SocialMediaButton } from "../../components/SocialMediaButton";

export default function About() {
  return (
    <Container>
      <Content maxWidth="100%">
        <Grid templateColumns="repeat(7, 1fr)" gap={6}>
          <GridItem colSpan={2}>
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
              <Text color="gray.100" mt="2">
                Sao Paulo, SP, Brazil
              </Text>

              <HStack mt="6">
                <ProgrammingLanguageIcon
                  label="NodeJS"
                  icon={FaNodeJs}
                  backgroundColor="#8CC84A"
                />
                <ProgrammingLanguageIcon
                  label="ReactJS"
                  icon={FaReact}
                  backgroundColor="#40C0DD"
                />
                <ProgrammingLanguageIcon
                  label="TypeScript"
                  icon={SiTypescript}
                  backgroundColor="#2E88D1"
                />
                <ProgrammingLanguageIcon
                  label="PostgreSQL"
                  icon={SiPostgresql}
                  color="#326690"
                />
                <ProgrammingLanguageIcon
                  label="Amazon Web Services"
                  icon={FaAws}
                  backgroundColor="#252F3E"
                  color="yellow.500"
                />
              </HStack>
            </Flex>
          </GridItem>

          <GridItem colSpan={5}>
            <Flex bg="gray.800" borderRadius="8" direction="column" p="8">
              <Heading as="h1" fontSize="1.5rem">
                About me
              </Heading>

              <Text my="8" pl="4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pretium nisl eu sem gravida imperdiet. Sed a ante et diam
                fermentum tempor. Fusce sed facilisis ligula. Ut eu magna et
                urna porttitor sollicitudin et vitae nulla. Duis dapibus eros
                dui, nec posuere neque gravida vel. In lectus lectus, dictum id
                pharetra eget, lobortis eu arcu. Morbi dictum egestas
                sollicitudin. Quisque ac mi in sapien vehicula tristique. Nullam
                consectetur facilisis odio, eu pulvinar neque rhoncus et. Nulla
                feugiat, enim vel pretium posuere, arcu libero efficitur dolor,
                pulvinar lacinia libero arcu eu dui.
              </Text>

              <HStack>
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
              </HStack>
            </Flex>
          </GridItem>
        </Grid>
      </Content>
    </Container>
  );
}
