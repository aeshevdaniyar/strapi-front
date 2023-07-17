import { AppRouter } from "./providers/RouterProvider";
import { getUserInited, useGetMeQuery } from "@entities/User";
import { Center, Spinner, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const { isLoading, isSuccess, isError, error } = useGetMeQuery();
  const inited = useSelector(getUserInited);
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
        // eslint-disable-next-line
        title: error.data?.error.name as any,
        // eslint-disable-next-line
        description: error.data?.error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isError, error, toast]);
  if (isLoading || !inited) {
    return (
      <Center h={"100vh"}>
        <Spinner size="xl" />
      </Center>
    );
  }

  return <AppRouter />;
};

export default App;
