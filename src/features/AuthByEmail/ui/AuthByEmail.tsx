import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { FormData, schema } from "../model/types/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthByEmailMutation } from "../model/api/AuthByEmailApi";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { RouterPath } from "@app/providers/RouterProvider/config/routerConfig";
export const AuthByEmail = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [
    authByEmailMutation,
    { isLoading, isError, error: authError, isSuccess },
  ] = useAuthByEmailMutation();
  const toast = useToast();
  const navigate = useNavigate();
  // eslint-disable-next-line
  const error = authError as any;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await authByEmailMutation(data);
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
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username" isInvalid={!!errors.username?.message}>
              <FormLabel>Username</FormLabel>
              <Input {...register("username")} type="text" />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
            <HStack>
              <Box>
                <FormControl
                  id="firstName"
                  isInvalid={!!errors.firstname?.message}
                >
                  <FormLabel>First Name</FormLabel>
                  <Input {...register("firstname")} type="text" />
                  <FormErrorMessage>
                    {errors.firstname?.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl
                  id="lastName"
                  isInvalid={!!errors.lastname?.message}
                >
                  <FormLabel>Last Name</FormLabel>
                  <Input {...register("lastname")} type="text" />
                  <FormErrorMessage>
                    {errors.lastname?.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isInvalid={!!errors.email?.message}>
              <FormLabel>Email address</FormLabel>
              <Input {...register("email")} type="email" />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.password?.message}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={handleSubmit(onSubmit)}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                isLoading={isLoading}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link as={RouterLink} to={RouterPath.LOGIN} color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
