import { theme } from "../config/theme";
import { FC, PropsWithChildren } from "react";
import {ChakraProvider} from '@chakra-ui/react'
export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
};
