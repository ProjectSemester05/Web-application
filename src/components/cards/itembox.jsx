import { React } from "react";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons'
import InitialFocus from "../../components/catalogue_func";
const ItemBox = ({ name, img, description, reminder }) => {
  return (
    <Flex
      mt="0"
      ml = {100}
      mt ={2}
      width="1350px"
      maxH="80px"
      flexDirection="column"
      mb="0"
      border-radius="24px"
      backgroundColor="white"
      borderRadius="24px"
      border="1px solid #CCC9C9"
      boxSizing="border-box"
      p={0}
      
    >
    
    <Flex justifyContent="space-around" >
        <Box>
            <Image
              src={img}
              height="40px"
              mt = {4}
              mb ={4}
              w="auto"
            />
        </Box>
        <Box justifyContent="right">
            <Text fontSize="18px" fontWeight="15" fontWeight="bold"  mt={6} >{name}</Text>
        </Box>

        <Box ml = {40} mr={80} justifyContent="right" >
            <Text fontSize="14px" fontWeight="14" mt={7}> {description}</Text>
            {/* <Text fontSize="14px" fontWeight="14" mt={7} color="white"> No description included</Text> */}
        </Box>

        <Box mt={2} justifyContent="right" color="darkred">
            <Text fontSize="14px" fontWeight="14" mt={6} >Reminder: {reminder}</Text>
        </Box>

        <Box ml = {150} mt={6} justifyContent="right">
            <InitialFocus />
            <Button background="white" ml={5}> <DeleteIcon /> </Button>
        </Box>         
    </Flex>

    </Flex>
  );
};

export default ItemBox;
