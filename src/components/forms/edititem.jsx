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
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import AddItemForm from "./additem"

function EditItem({item}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button background="blackAlpha" onClick={onOpen}>
        <EditIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
              Edit Item
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <AddItemForm add={false} item={item} onClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditItem;
