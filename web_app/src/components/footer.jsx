import { React } from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  Image,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { SiLinkedin, SiAmazonalexa, SiAmazonaws } from "react-icons/si";

const Footer = () => {
  return (
    <Flex
      width="full"
      mt="0"
      backgroundColor="#1B262C"
      color="white"
      minHeight="50px"
      maxH="80px"
      mb="0"
    >
      <Box flex={1} p="20px">
        <Flex h="100" m>
          <Box flex="1" justifyContent="flex-end">
            <Text color="white" mr="2" lineHeight="35px" >
              Powered by
            </Text>
          </Box>

          <Stack isInline spacing={2} maxW={"md"} flex="1">
            <IconButton
              colorScheme={"facebook"}
              icon={<SiAmazonalexa />}
              borderRadius="50%"
            />
            <IconButton
              variant={"outline"}
              icon={<SiAmazonaws />}
              borderRadius="50%"
            />
          </Stack>
        </Flex>
      </Box>

      <Box flex={1} p="20px">
        <Flex>
          <Box flex="1" justifyContent="flex-end" textAlign="right" mr="3">
            <Text color="white" mr="2" lineHeight="35px">
              Find us on
            </Text>
          </Box>
          <Stack isInline spacing={2} flex="1">
            {/* Facebook */}
            <IconButton
              colorScheme={"facebook"}
              icon={<FaFacebook />}
              borderRadius="50%"
            />

            {/* Google */}
            <IconButton
              variant={"outline"}
              icon={<FcGoogle />}
              borderRadius="50%"
            />

            {/* LinkedIn */}
            <IconButton
              colorScheme={"messenger"}
              icon={<SiLinkedin />}
              borderRadius="50%"
            />

            {/* Messenger */}
            <IconButton
              colorScheme={"messenger"}
              icon={<FaTwitter />}
              borderRadius="50%"
            />
          </Stack>
        </Flex>
      </Box>

      <Box flex={1} p="20px" textAlign="right">
        <Text lineHeight="35px">All rights reserved: Team Shark</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
