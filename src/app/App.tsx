import { AppRouter } from "./providers/RouterProvider";
import { useGetUserQuery } from "@entities/User";
import { Center, Spinner, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
const App = () => {
  const { isLoading, isSuccess, isError, error } = useGetUserQuery();
  const toast = useToast();
  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Login success",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isSuccess, toast]);
  useEffect(() => {
    if (isError) {
      console.log(error);

      toast({
        title: error.data.error.name,
        description: error.data.error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isError, error, toast]);
  if (isLoading) {
    return (
      <Center h={"100vh"}>
        <Spinner size="xl" />
      </Center>
    );
  }

  return <AppRouter />;
};

export default App;
