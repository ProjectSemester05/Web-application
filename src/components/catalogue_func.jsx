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
    useDisclosure,FormControl,FormLabel, Input,Textarea
  } from "@chakra-ui/react"
  import {  EditIcon } from '@chakra-ui/icons'
function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    // const initialRef = React.useRef()
    // const finalRef = React.useRef()
  
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
                <Input />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea  />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Reminder</FormLabel>
                <Input type="date" />
              </FormControl>

            <FormControl mt={4}>
                <Button>Upload Image</Button>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default InitialFocus;