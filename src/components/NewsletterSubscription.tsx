import { Box, Flex, Text, Heading, Stack, Button, useColorMode } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Input } from "./Input";
import { api } from "../services/api";

type SubscribeFormData = {
  email: string;
};

const subscribeFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail address is required")
    .email("Invalid e-mail address"),
});

export function NewsletterSubscription() {
  const { colorMode } = useColorMode();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(subscribeFormSchema),
  });
  const { errors } = formState;

  const handleSubscription: SubmitHandler<SubscribeFormData> = async ({
    email,
  }) => {
    await api.post("/newsletter/subscribe", {
      email,
    });

    toast.success("You are now subscribed to the newsletter!", {
      style: { backgroundColor: "var(--chakra-colors-green-500)" },
    });

    reset();
  };

  return (
    <Flex
      px={["2rem", "4rem", "6rem"]}
      py="4rem"
      bgColor={colorMode === 'dark' ? 'gray.600' : 'blackAlpha.100'}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading as="h1" size="xl">
        Newsletter
      </Heading>
      <Text
        as="p"
        color={colorMode === 'dark' ? 'gray.200' : 'gray.500'}
        mt="0.5rem"
        mb="2rem"
        lineHeight="1.625rem"
        fontSize="xl"
      >
        Keep up to date whenever there's a new publication.
      </Text>

      <Box
        as="form"
        w={["100%", "100%", "60%"]}
        onSubmit={handleSubmit(handleSubscription)}
      >
        <Stack spacing="4" direction={["column", "row"]}>
          <Input
            name="email"
            type="email"
            placeholder="Your awesome e-mail address"
            _placeholder={{ color: 'gray.500' }}
            bgColor={colorMode === 'dark' ? 'gray.200' : 'white'}
            _hover={{ bgColor: colorMode === 'dark' ? 'gray.200' : 'white' }}
            _focus={{ bgColor: colorMode === 'dark' ? 'gray.200' : 'white' }}
            textColor="gray.500"
            {...register("email")}
            error={errors.email}
            shouldShowErrorMessage={false}
          />

          <Button
            type="submit"
            bg="brand.yellow.500"
            transition="filter 0.2s"
            color="white"
            _hover={{
              filter: `brightness(0.${colorMode === 'dark' ? 8 : 9})`,
            }}
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Subscribe
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
