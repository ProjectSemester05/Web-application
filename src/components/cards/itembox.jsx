import { React } from "react";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import InitialFocus from "../../components/catalogue_func";
import {
  Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,
} from "@chakra-ui/react";
const ItemBox = ({ name, img, description, reminder }) => {
  const item = {
    name: name,
    img: img,
    description: description,
    reminder: reminder
  }
  return (
      <Tr>
        <Td>
        <Image
              src={img}
              height="40px"
              mt = {4}
              mb ={4}
              w="auto"
              />
        </Td>
        <Td><b>{name}</b></Td>
        <Td>{description}</Td>
        <Td>{reminder}</Td>
        <Td textAlign="center"><InitialFocus itemname={item} />
        <Button background="white" ml={5}> <DeleteIcon /> </Button></Td>
      </Tr>
      
  );
}
export default ItemBox;
