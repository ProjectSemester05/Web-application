import React, { useState} from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Avatar from "@material-ui/core/avatar";
import UserProfile from "./cards/profile"

const Header = ({ signed }) => {
  const [viewProfile, setViewProfile] = useState(false)
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="space-between"
      color="white"
      minHeight="90px"
      backgroundColor="#121540"
      position="relative"
    >
      <Flex width="full" justifyContent="space-between">
        <Box flex="1" textAlign="center" py="auto" px="60px">
          {/* <Text color="#141B57" fontSize={["20px","60px"]} fontWeight="semi-bold" lineHeight="85px" textShadow="0px 8px 6px rgba(0, 0, 0, 0.25)">Virtual Archive</Text> */}
          <Image src="/assets/images/logo.png" height="60px" />
        </Box>
        <Box flex="1">
          {signed && (
                <Box float="right" mr="8" my="auto" cursor="pointer">
              <Avatar
                alt="User"
                src="/assets/images/user.png"
                className="post__avatar"
                onClick={() => setViewProfile(!viewProfile)}
              />
            </Box>
          )}
        </Box>
        {viewProfile && (<Box position="absolute" right="10px" zIndex="10" top="70px"><UserProfile /></Box>)}
      </Flex>
    </Flex>
  );
};

export default Header;