import { React } from "react";
import {
  Box,
  Text,
  Flex
} from "@chakra-ui/react";


const Header = () => {
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="space-between"
      color="white"
      minHeight="60px"
    >    
      <Flex width="full">
        <Box flex="1" textAlign="center" py="auto">
        <Text color="#141B57" fontSize={["20px","60px"]} fontWeight="semi-bold" lineHeight="85px" textShadow="0px 8px 6px rgba(0, 0, 0, 0.25)">Virtual Archive</Text>
        {/* <Image  src="/assets/images/logo.jpg"/> */}
        </Box>
        <Box flex={1} w={0} h={"100px"} borderBottom={"100px solid #141B57"} borderLeft={"40px solid transparent"}></Box>
      </Flex>
    </Flex>
  );
};


export default Header;



