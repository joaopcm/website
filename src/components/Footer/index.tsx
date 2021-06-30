import { Box, Flex, SimpleGrid, Text, List } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { FooterTitle } from "./FooterTitle";
import { FooterItem } from "./FooterItem";

export function Footer() {
  return (
    <Box bgColor="black" px={["2rem", "6rem"]}>
      <Box py="2rem" fontSize="sm">
        <SimpleGrid columns={[1, 3]} spacing={10}>
          <Box display={["none", "block"]}>
            <Logo />
          </Box>

          <Box>
            <FooterTitle>FIND ME ON THE INTERNET</FooterTitle>

            <List spacing={3}>
              <FooterItem href="https://github.com/joaopcm">GitHub</FooterItem>
              <FooterItem href="https://www.linkedin.com/in/joaopcm/">
                LinkedIn
              </FooterItem>
              <FooterItem href="https://stackoverflow.com/users/15531692/jo%c3%a3o-melo">
                StackOverflow
              </FooterItem>
              <FooterItem href="mailto:jopcmelo@gmail.com">Email</FooterItem>
              <FooterItem href="https://www.instagram.com/jopcmelo/">
                Instagram
              </FooterItem>
              <FooterItem href="https://twitter.com/jopcmelo">
                Twitter
              </FooterItem>
            </List>
          </Box>

          <Box>
            <FooterTitle>KNOW ME BETTER</FooterTitle>

            <List spacing={3}>
              <FooterItem href="https://drive.google.com/file/d/1J0OcU4OJKOKX_6cJ9wCRXlDJXmPIjmzV/view">
                My Resume
              </FooterItem>
            </List>
          </Box>
        </SimpleGrid>
      </Box>

      <Flex
        align="center"
        justify={["center", "flex-end"]}
        color="gray.300"
        py="2rem"
        fontSize="sm"
      >
        <Text>
          Copyrights ® {new Date().getFullYear()} jopcmelo. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}
