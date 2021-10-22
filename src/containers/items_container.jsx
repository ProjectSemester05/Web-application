import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  useToast,
  Text,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import MaterialTable from "material-table";
import tableIcons from "../utils/tableIcons";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { deleteItem, getItems } from "../api/item";
import AddItemForm from "../components/forms/additem";

const ItemContainer = ({ uuid }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [items, setItems] = useState([]);
  const [isAdd, setIsAdd] = useState(true)

  let toast = useToast();

  const addItemOnClick =() =>{
    setIsAdd(true);
    onOpen();
  }

  const addItem = (item) => {
    setItems([...items, item]);
  };
  const deleteItem = (uuid) => {
    let newItems = items.filter((item) => item.UUID !== uuid);
    setItems(newItems);
  };

  const tableColumns = [
    {
      title: "Image",
      field: "ImageUrl",
      type: "file",
      width: "5%",
      render: (item) => (
        <Image
          src={item.ImageUrl ? item.ImageUrl : "/assets/images/paint.png"}
          height="40px"
          my={2}
          ml={2}
          w="auto"
        />
      ),
    },
    { title: "Name", field: "ItemName", width: "10%" },
    { title: "Description", field: "Description", width: "80%" },
    { title: "Location", field: "StoredLocation", width: "5%" },
  ];

  const tableOptions = {
    pageSize: 10,
    pageSizeOptions: [10, 30, 50],
  };

  useEffect(() => {
    let result = {};
    async function fetchItems() {
      result = await getItems(uuid);
      setItems(result.Items);
      console.log(JSON.stringify(result));
    }
    fetchItems();
  }, []);

  return (
    <Box>
      <Text fontSize="22px" as="" ml={20} mb={5}>
        <CheckCircleIcon w={5} h={5} mr={5} mb={1} />
        Items
      </Text>
      <Button ml="20px" minW="200px" bg="blue" color="white" _hover={{bg:"lightblue"}} onClick={addItemOnClick}>Add New Item</Button>
      <Box p={6} data-testid="item-cont">
        <MaterialTable
          title=""
          columns={tableColumns}
          data={items}
          icons={tableIcons}
          options={tableOptions}
          editable={{
            // onRowUpdate: (newData, oldData) => deleteItem("1"),
            onRowDelete: (data) => deleteItem(data.UUID),
          }}
          actions={[
            {
              icon: "edit",
              onClick: (rowData) => {
                setIsAdd(false)
                onOpen()
                // open dialog and fill your data to update
              },
            },
          ]}
        />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
            Add Item
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <AddItemForm onClose={onClose} uuid={uuid} add={isAdd} func={addItem} item={null}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ItemContainer;
