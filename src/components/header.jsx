import { React } from "react";
import { Box, Text, Flex, Image, IconButton } from "@chakra-ui/react";
import SearchBar from "./forms/search";
import { CgLogOut } from "react-icons/cg";
import {signOut} from "../utils/amplifyConf";
import { useHistory } from "react-router-dom";

const Header = ({signed}) => {
  const history = useHistory();
  const logOut = () => {
    signOut()
    history.push("/")
  }
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="space-between"
      color="white"
      minHeight="90px"
      backgroundColor="#121540"

    >
      <Flex width="full" justifyContent="space-between">
        <Box flex="1" textAlign="center" py="auto" px="60px">
          {/* <Text color="#141B57" fontSize={["20px","60px"]} fontWeight="semi-bold" lineHeight="85px" textShadow="0px 8px 6px rgba(0, 0, 0, 0.25)">Virtual Archive</Text> */}
          <Image src="/assets/images/logo.png" height="60px" />
        </Box>
        <Box flex="1">
          {/* <SearchBar w="200px"  /> */}
          {signed && (<Box float="right" mr="8" my="auto">
          <IconButton
            colorScheme="teal"
            aria-label="Call Segun"
            backgroundColor="transparent"
            _hover ={{bg:"transparent"}}
            size="lg"
            onClick = {logOut}
            icon={<CgLogOut mr="0" float="right" fontSize="35px"/>}
          />
          
          </Box>)}
          
        </Box>
        <Box>

        </Box>
        {/* <Box flex={1} w={0} h={"100px"} borderBottom={"100px solid #141B57"} borderLeft={"40px solid transparent"}></Box> */}
      </Flex>
    </Flex>
  );
};

export default Header;
