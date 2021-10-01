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

function AddItemPopup({uuid, func}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
              Add Item
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <AddItemForm onClose={onClose} uuid={uuid} add={true} func={func}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddItemPopup;
