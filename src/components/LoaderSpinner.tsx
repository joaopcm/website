import { Box, Spinner } from "@chakra-ui/react";

export function LoaderSpinner() {
  return (
    <Box
      display="flex"
      minHeight="calc(100vh + 5rem)"
      width="100%"
      position="fixed"
      top="-5rem"
      alignItems="center"
      justifyContent="center"
      backgroundColor="rgba(0, 0, 0, 0.6)"
      zIndex={2}
    >
      <Spinner size="xl" thickness="4px" color="brand.cyan.500" />
    </Box>
  );
}
