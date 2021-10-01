import { React } from "react";
import { Table, Thead, Tbody, Tr, Th, TableCaption } from "@chakra-ui/react";
import ItemBox from "../components/cards/itembox";

const ItemContainer = ({items, func}) => {
  return (
    <Table
      variant="simple"
      ml={100}
      mt={2}
      width="1350px"
      maxH="80px"
      flexDirection="column"
      mb="0"
      border-radius="24px"
      backgroundColor="white"
      borderRadius="24px"
      border="1px solid #CCC9C9"
      boxSizing="border-box"
    >
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
        {items.map(({UUID,ItemName, Description, ImageUrl}) => 
        <ItemBox
          UUID = {UUID}
          ItemName= {ItemName}
          Description={Description}
          img={ImageUrl ? ImageUrl: "/assets/images/paint.png"}
          reminder="2021-09-21"
          func  = {func}
        />
        )}
        
       
      </Tbody>
    </Table>
  );
};

export default ItemContainer;
