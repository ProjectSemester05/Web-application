import { React } from "react";
import {
  Box,
  Button,
  IconButton,
  Heading,
  Input,
  Stack,
  Text,
  Link,
  Flex,
  Image,
  Center
} from "@chakra-ui/react";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';


const Header = ({ onLogin }) => {
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
        <Text color="#141B57" fontSize="5xl" fontWeight="semi-bold" lineHeight="85px" textShadow="0px 8px 6px rgba(0, 0, 0, 0.25)">Virtual Archive</Text>
        </Box>
        <Box flex={1} w={0} h={"100px"} borderBottom={"100px solid #141B57"} borderLeft={"40px solid transparent"}></Box>
      </Flex>
    </Flex>
  );
};


export default Header;



