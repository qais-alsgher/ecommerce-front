import React from "react";
import { Box, Flex, VStack, useColorMode } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Jacket from "../../assets/images/cat/Jacket.jpg";
import Pajamas from "../../assets/images/cat/Pajamas.jpg";
import Tshirt from "../../assets/images/cat/T-shirt.jpg";

const changeBackground = keyframes`
0%, 25% {
  background-image: url(${Jacket});
}
50%, 75% {
  background-image: url(${Pajamas});
}
80%, 100% {
  background-image: url(${Tshirt});
}
`;

export default function Templet({ children }) {
  const { colorMode } = useColorMode();
  return (
    <Flex minH={`calc(100vh - 60px)`} direction={{ base: "column", md: "row" }}>
      <Flex
        flexBasis={{ base: "100%", md: "50%" }}
        justify={"center"}
        alignItems={"center"}
        mt={{ base: "10", md: "0" }}
        mb={{ base: "10", md: "0" }}
      >
        {children}
      </Flex>

      <Flex
        // display={{ base: "none", md: "block" }}
        // flexBasis={{ md: "50%" }}
        flexBasis={{ base: "100%", md: "50%" }}
        animation={`${changeBackground} 30s infinite`}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        justifyContent={"center"}
        align={"center"}
        position={"relative"}
        _before={{
          content: '""',
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundColor:
            colorMode === "light" ? "darkBlue.100" : "darkBlue.500",
          opacity: 0.9,
          width: "100%",
          height: "100%",
        }}
      >
        <VStack zIndex={2} textAlign={"center"} gap={5} margin={10}>
          <Box fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
            Wlecme to Esports Website
          </Box>
          <Box fontSize={"xl"} maxW={"lg"} lineHeight={"1.5"}>
            Unleash your passion. Fuel your game. Together, we conquer the
            field. Welcome to a world where athletes unite, and where dreams
            take flight. Step into greatness and let your journey begin
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
}
