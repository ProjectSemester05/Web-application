import { React } from "react";
import AddItemPopup from "../components/additem_func";
import { Box, Text, Flex, Button,Image } from "@chakra-ui/react";
import "@fontsource/montserrat";
import { Heading } from "@chakra-ui/react"
import Footer from "../components/footer";
import Header from "../components/header";
import CatalogueCard from "../components/cards/catalogue";
import ItemBox from "../components/cards/itembox";
import { CheckCircleIcon } from '@chakra-ui/icons';
import "../style/catalogues.css";
import {
  Table,Thead,Tbody,Tr,Th,TableCaption,
} from "@chakra-ui/react";

const CataloguePage = () => {

  return (
    <Flex flexDirection="column" position="relative">
      <Flex>
        <Header />
      </Flex>
      <Heading m={5} isTruncated>
        Kitchen Items
      </Heading>
      {/* <Divider /> */}
      <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />

      <Text fontSize="22px" as="" ml={20}><CheckCircleIcon w={5} h={5} mr={5} mb={1}/>Sub Categories</Text>


      
      <Flex width="full" flexDirection="column" p="20px">
        <Flex justifyContent="space-between" ml={20} mt={5} mb={5}>
          <CatalogueCard
            name="Kitchen Items"
            iCount="21"
            cCount="6"
            img="/assets/images/kitchen_items.png"
          />
          <CatalogueCard
            name="Book Collection"
            iCount="21"
            cCount="6"
            img="/assets/images/book_collection.png"
          />
          <CatalogueCard
            name="Necessary Tools"
            iCount="21"
            cCount="6"
            img="/assets/images/book_collection.png"
          />
        </Flex>
      </Flex>

      <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />

      <Text fontSize="22px" as="" ml={20} mb={5}><CheckCircleIcon w={5} h={5} mr={5} mb={1}/>Items</Text>
      <AddItemPopup />

      <Table variant="simple"
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
            boxSizing="border-box">
        <TableCaption></TableCaption>
          <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Item Name</Th>
            <Th>Description</Th>
            <Th>Reminder</Th>
            <Th textAlign="center">Edit/Delete</Th>
          </Tr>
          </Thead>

          <Tbody>
            <ItemBox
              name="Kettle"
              description = "Newly bought electric kettle"
              img="/assets/images/paint.png"
              reminder = "2021-10-04"
            />
            <ItemBox
              name="Mug"
              description = "Mug with the red handle"
              img="/assets/images/paint.png"
              reminder = "2021-10-14"
            />
            <ItemBox
              name="Beater"
              description = "No description included"
              img="/assets/images/paint.png"
              reminder = "2021-11-02"
            />
            <ItemBox
              name="Fork"
              description = "No description included"
              img="/assets/images/paint.png"
              reminder = "none"
            />
            <ItemBox
              name="Tea Bag"
              description = "No description included"
              img="/assets/images/paint.png"
              reminder = "none"
            />
            <ItemBox
              name="Grinder"
              description = "No description included"
              img="/assets/images/paint.png"
              reminder = "none"
            />
            <ItemBox
              name="Blender"
              description = "No description included"
              img="/assets/images/paint.png"
              reminder = "none"
            />    
          </Tbody>
      </Table>

      
      <Flex mt="auto">
        <Footer minHeight="20px"/>
      </Flex>
    </Flex>
  );
};



export default CataloguePage;
