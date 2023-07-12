import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  FormErrorMessage,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useLoginByEmailMutation } from "../model/api/LoginByEmailApi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, FormData } from "../model/types/schema";
import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { RouterPath } from "@app/providers/RouterProvider/config/routerConfig";
export const LoginByEmail = () => {
  const [loginByEmailMutation, { isLoading, isError, error, isSuccess }] =
    useLoginByEmailMutation();
  const toast = useToast();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await loginByEmailMutation(data).unwrap();
    } catch (e) {
      toast({
        status: "error",
        title: "Error",
        description: "Oh no, there was an error!",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (isError) {
      // eslint-disable-next-line
      const errorName = error.data.error.name;
      // eslint-disable-next-line
      const errorMessage = error.data.error.message;
      toast({
        // eslint-disable-next-line
        title: errorName,
        // eslint-disable-next-line
        description: errorMessage,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isError, toast, error]);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Success",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate(RouterPath.MAIN);
    }
  }, [isSuccess, navigate, toast]);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl isInvalid={!!errors.identifier?.message} id="email">
              <FormLabel>Email address</FormLabel>
              <Input {...register("identifier")} type="email" />
              <FormErrorMessage>{errors.identifier?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password?.message} id="password">
              <FormLabel>Password</FormLabel>
              <Input {...register("password")} type="password" />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link
                  as={RouterLink}
                  to={RouterPath.REGISTER}
                  color={"blue.400"}
                >
                  Have account?
                </Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                isLoading={isLoading}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={handleSubmit(onSubmit)}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
