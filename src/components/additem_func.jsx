import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  React,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import AddItemForm from "./forms/additem";

function AddItemPopup({uuid}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const initialRef = React.useRef()
  // const finalRef = React.useRef()

  return (
    <>
      <Box
        as="button"
        onClick={onOpen}
        borderRadius="md"
        bg="blue"
        color="white"
        mr={1200}
        ml={100}
        h={8}
      >
        <AddIcon w={3} h={3} mr={5} mb={1} />
        Add New Item
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Add New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <AddItemForm onClose={onClose} uuid={uuid}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
function Welcome() {
  console.log("Hello");
  return <h1>Hello</h1>;
}

export default AddItemPopup;
