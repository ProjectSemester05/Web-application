import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import "../../style/animation.css";

const RecentItem = ({ name, img, catalogue, date }) => {
  return (
    <Flex
      mt="0"
      width="200px"
      maxH="250px"
      mb="0"
      border-radius="8px"
      flexDirection="column"
      backgroundColor="white"
      borderRadius="8px"
      border="2px solid #CCC9C9"
      boxSizing="border-box"
      p={4}
      className="inflate"
      cursor="pointer"
    >
      <Flex justifyContent="center" mb="3">
        <Image src={img}height="110px" width="auto"/>
      </Flex>
      <Box textAlign="center">
        <Text fontSize="18px" fontWeight="500">{name}</Text>
        <Text fontSize="14px" fontWeight="400">Catalogue: {catalogue}</Text>
        <Text fontSize="14px" fontWeight="400">Reminder: {date} </Text>
      </Box>
    </Flex>
  );
};

export default RecentItem;
