import * as React from "react";
import { ChakraProvider } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";
import Header from "./components/Header";
import Feed from "./components/Feed";

export const App = () => (
  <ChakraProvider theme={theme} resetCSS portalZIndex={40}>
    <Feed />
  </ChakraProvider>
);
