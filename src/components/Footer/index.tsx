import { Box, Flex, SimpleGrid, Text, List, useColorMode } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { FooterTitle } from "./FooterTitle";
import { FooterItem } from "./FooterItem";
import { NewsletterSubscription } from "../NewsletterSubscription";

export function Footer() {
  const { colorMode } = useColorMode();

  return (
    <>
      <NewsletterSubscription />

      <Box bgColor={colorMode === 'dark' ? 'black' : 'white'} px={["2rem", "6rem"]}>
        <Box py="2rem" fontSize="sm">
          <SimpleGrid columns={[1, 3]} spacing={10}>
            <Box display={["none", "block"]}>
              <Logo />
            </Box>

            <Box>
              <FooterTitle>FIND ME ON THE INTERNET</FooterTitle>

              <List spacing={3}>
                <FooterItem href="https://github.com/joaopcm">
                  GitHub
                </FooterItem>
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
          color={colorMode === 'dark' ? 'brand.gray.300' : 'blackAlpha.700'}
          py="2rem"
          fontSize="sm"
        >
          <Text>
            Copyrights ® {new Date().getFullYear()} jopcmelo. All rights
            reserved.
          </Text>
        </Flex>
      </Box>
    </>
  );
}
