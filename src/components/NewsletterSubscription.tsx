import { Box, Flex, Text, Heading, Stack, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Input } from "./Input";

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
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(subscribeFormSchema),
  });
  const { errors } = formState;

  const handleSubscription: SubmitHandler<SubscribeFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("You are now subscribed to the newsletter!", {
      style: { backgroundColor: "var(--chakra-colors-green-500)" },
    });

    console.log(values);

    reset();
  };

  return (
    <Flex
      px={["2rem", "4rem", "6rem"]}
      py="4rem"
      bgColor="gray.600"
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
        color="gray.200"
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
            bgColor="gray.200"
            _hover={{ bgColor: "gray.200" }}
            _focus={{ bgColor: "gray.200" }}
            textColor="gray.500"
            {...register("email")}
            error={errors.email}
            shouldShowErrorMessage={false}
          />

          <Button
            type="submit"
            bg="yellow.500"
            transition="filter 0.2s"
            _hover={{
              filter: "brightness(0.8)",
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
