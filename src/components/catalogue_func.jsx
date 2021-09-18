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
  useDisclosure,FormControl,FormLabel, Input,Textarea, useRef
} from "@chakra-ui/react"
import { CheckCircleIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {useState} from 'react';
function InitialFocus(props) {
  const { isOpen, onOpen, onClose} = useDisclosure()
  // const initialRef = React.useRef()
  // const finalRef = React.useRef()
  // console.log(props.itemname)
  const [name, setName] = useState(props.itemname.name);
  const [img, setImage] = useState(props.itemname.img);
  const [description, setDescription] = useState(props.itemname.description);
  const [reminder, setReminder] = useState(props.itemname.reminder);
  function editName(){
    setName(Input.value)
  }
  function editImage(){
    setImage(Input.value)
  }
  function editDescription(){
    setDescription(Input.value)
  }
  function editReminder(){
    setReminder(Input.value)
  }
  return (
    <>
      <Button background="blackAlpha" onClick={onOpen}><EditIcon /> </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Edit the Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Item name</FormLabel>
              <Input type="text" value={name} onChange={editName}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea value={description} onChange={editDescription} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Reminder</FormLabel>
              <Input type="text" value={reminder} onChange={editReminder} />
            </FormControl>

          <FormControl mt={4}>
              <Button>Upload Image</Button>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default InitialFocus;