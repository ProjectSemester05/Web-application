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
  Flex,
  Text
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import AddItemForm from "./forms/additem";

function AddItemPopup({uuid, func}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="button"
        onClick={onOpen}
        borderRadius="md"
        bg="blue"
        color="white"
        mr={1200}
        ml={100}
        h={8}
        minWidth="200px"
        justifyContent="center"
      >
      <Box ml="3" my="auto">
        <AddIcon  h={3} mr= {0} my ={"auto"} minWidth="40px" display={["block","block"]} />
        </Box>
        <Box mr="3" my="auto">
        <Text float="left" >Add New Item</Text>
        </Box>
      </Flex>
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
