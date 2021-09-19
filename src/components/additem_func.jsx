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
  useDisclosure,FormControl,FormLabel, Input,Textarea, useRef
} from "@chakra-ui/react"
import { CheckCircleIcon, AddIcon, DeleteIcon } from '@chakra-ui/icons';
import ReactDOM from 'react-dom';
import ItemBox from "../components/cards/itembox";
function AddItemPopup() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const initialRef = React.useRef()
  // const finalRef = React.useRef()

  return (
    <>

      <Box as="button" onClick={onOpen} borderRadius="md" bg="blue" color="white" mr={1200} ml ={100} h={8}>
      <AddIcon w={3} h={3} mr={5} mb={1}/>Add New Item
      </Box>
      <Modal

        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Add New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Item name</FormLabel>
              <Input />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea  />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Reminder</FormLabel>
              <Input type="text" />
            </FormControl>

          <FormControl mt={4}>
              <Button>Upload Image</Button>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={Welcome} colorScheme="blue" mr={3} >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
  function Welcome() {

    console.log("Hello")
      return <h1>Hello</h1>;
    }
    

export default AddItemPopup;