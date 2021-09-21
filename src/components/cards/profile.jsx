import { React } from "react";
import { Box, Text, Flex, Image, Stack } from "@chakra-ui/react";

const UserProfile = () => {
  return (
    <Flex
      width="280px"
      h="260px"
      ml="30px" 
      mt="40px"
      color="black"
      mb="0"
      flexDirection="column"
      backgroundColor="white"
      borderRadius="2px"
      boxShadow="lg"
      justifyContent="center"
      p="4px"
      display={["none","block"]}
    >
      <Box px="auto">
        <Image src={"/assets/images/user.png"} h="100px" mx="auto" boxShadow="lg" borderRadius="50%"/>
      </Box>
      <Box>
        <Box textAlign="center" mt="3">
          <Text fontWeight="bold" fontSize="20px">
            John Snow
          </Text>
          <Flex justifyContent="space-around" mt="4">
            <Stack>
              <Text fontWeight="bold" fontSize="18px">
                6
              </Text>
              <Text color="#727272"  lineHeight="0px" fontSize="13px">CATALOGUES</Text>
            </Stack>
            <Stack>
              <Text fontWeight="bold" fontSize="18px" >
                21
              </Text>
              <Text color="#727272" lineHeight="0px" fontSize="13px">ITEMS</Text>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default UserProfile;
