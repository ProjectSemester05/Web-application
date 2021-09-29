import { React } from "react";
import { Table, Thead, Tbody, Tr, Th, TableCaption } from "@chakra-ui/react";
import ItemBox from "../components/cards/itembox";

const ItemContainer = () => {
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
        <ItemBox
          name="Kettle"
          description="Newly bought electric kettle"
          img="/assets/images/paint.png"
          reminder="2021-09-21"
        />
        <ItemBox
          name="Mug"
          description="Mug with the red handle"
          img="/assets/images/paint.png"
          reminder="21/09/2021"
        />
        <ItemBox
          name="Beater"
          description="No description included"
          img="/assets/images/paint.png"
          reminder="none"
        />
        <ItemBox
          name="Fork"
          description="No description included"
          img="/assets/images/paint.png"
          reminder="none"
        />
        <ItemBox
          name="Tea Bag"
          description="No description included"
          img="/assets/images/paint.png"
          reminder="none"
        />
        <ItemBox
          name="Grinder"
          description="No description included"
          img="/assets/images/paint.png"
          reminder="none"
        />
        <ItemBox
          name="Blender"
          description="No description included"
          img="/assets/images/paint.png"
          reminder="none"
        />
      </Tbody>
    </Table>
  );
};

export default ItemContainer;
