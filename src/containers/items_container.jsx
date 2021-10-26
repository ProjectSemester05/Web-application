import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
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
import Reminder from "../components/forms/reminder";


const ItemContainer = ({ uuid }) => {
  const reminderPopup = useDisclosure();
  const itemPopup = useDisclosure();

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [isAdd, setIsAdd] = useState(true);

  const addItemOnClick = () => {
    setIsAdd(true);
    itemPopup.onOpen();
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (data) => {
    let newItems = items.map((item) => {
      if (item.UUID === data.UUID) {
        item = { ...item, ...data };
      }
      return item;
    });
    setItems(newItems);
  };

  const deleteItemClick = async (uuid) => {
    let result = await deleteItem(uuid);
    if (result.success) {
      let newItems = items.filter((item) => item.UUID !== uuid);
      setItems(newItems);
    }
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
    }
    fetchItems();
  }, []);

  return (
    <Box>
      <Text fontSize="22px" as="" ml={20} mb={5}>
        <CheckCircleIcon w={5} h={5} mr={5} mb={1} />
        Items
      </Text>
      <Button
        ml="20px"
        minW="200px"
        bg="blue"
        color="white"
        _hover={{ bg: "lightblue" }}
        onClick={addItemOnClick}
      >
        Add New Item
      </Button>
      <Box p={6} data-testid="item-cont">
        <MaterialTable
          title=""
          columns={tableColumns}
          data={items}
          options={tableOptions}
          icons={tableIcons}
          editable={{
            onRowDelete: (data) => deleteItemClick(data.UUID),
          }}
          actions={[
            {
              icon: tableIcons.Edit,
              tooltip: "Edit",
              onClick: (e, rowData) => {
                setIsAdd(false);
                setCurrentItem(rowData);
                itemPopup.onOpen();
              },
            },
            {
              icon: tableIcons.InsertInvitation,
              tooltip: "Reminders",
              onClick: (e, rowData) => {
                setIsAdd(false);
                setCurrentItem(rowData);
                reminderPopup.onOpen();
                // open dialog and fill your data to update
              },
            },
          ]}
        />
      </Box>
      <Modal isOpen={itemPopup.isOpen} onClose={itemPopup.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
            {isAdd ? "Add Item" : "Edit Item"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <AddItemForm
              onClose={itemPopup.onClose}
              uuid={uuid}
              add={isAdd}
              func={isAdd ? addItem : updateItem}
              item={currentItem}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        zIndex={1}
        isOpen={reminderPopup.isOpen}
        size="xl"
        onClose={reminderPopup.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
            Reminders
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <AddItemForm onClose={reminderPopup.onClose} uuid={uuid} add={isAdd} func={addItem} item={currentItem}/> */}
            <Reminder uuid={currentItem.UUID} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ItemContainer;
