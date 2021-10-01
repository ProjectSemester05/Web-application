import { React } from "react";
import { Image, Button, useToast } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import EditItem from "../forms/edititem";
import { Tr, Td } from "@chakra-ui/react";
import { deleteItem } from "../../api/item";


const ItemBox = ({ UUID, ItemName, img, Description, reminder, func }) => {
  let toast = useToast();
  const item = {
    ItemName: ItemName,
    img: img,
    Description: Description,
    reminder: reminder,
  };
  const deleteFunc = async () => {
    let result = await deleteItem(UUID) 
    if (result.success) {
      toast({
        title: "Success",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      func(UUID)

    } else {
      toast({
        title: "Error during deletion.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }
  return (
    <Tr>
      <Td>
        <Image src={img} height="40px" mt={4} mb={4} w="auto" />
      </Td>
      <Td>{ItemName}</Td>
      <Td>{Description}</Td>
      <Td>{reminder}</Td>
      <Td textAlign="center">
        <EditItem item={item} />
        <Button background="white" ml={5} on>
          <DeleteIcon onClick={deleteFunc}/>
        </Button>
      </Td>
    </Tr>
  );
};
export default ItemBox;
