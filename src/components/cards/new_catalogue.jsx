import { React } from "react";
import {
  Box,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { IoAddCircleOutline } from "react-icons/io5";
import NewCatalogueForm from "../forms/new_catalogue_form";

const NewCatalogueCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        width="full"
        mt="0"
        backgroundColor="#E1DEF1"
        width="400px"
        height="200px"
        color="white"
        mb="0"
        flexDirection="column"
        p={3}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="22px"
        onClick={onOpen}
        cursor="pointer"
      >
        <Box>
          <Flex justifyContent="space-around">
            <Box>
              <Text fontWeight="bold" fontSize="25px" color="black" mt={3}>
                New Catalogue
              </Text>
            </Box>
            <Box mt={3}>
              <IoAddCircleOutline fontSize="47px" color="#757171" />
            </Box>
          </Flex>
        </Box>
        <Box
          marginTop="8px"
          marginLeft="3%"
          width="94%"
          border="1px solid #000000"
          box-shadow="0px 4px 4px rgb(136 121 121 / 25%)"
        />
        <Box>
          <Flex justifyContent="space-around">
            <Box>
              <Text color="#757171" marginTop="25px" fontSize="17px">
                Create your own Catalogue!!!
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent w="full">
          <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">New Catalogue</ModalHeader>
          <ModalCloseButton color="white"/>
          <ModalBody>
            <NewCatalogueForm onClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewCatalogueCard;
