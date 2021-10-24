import  React  from "react";
import {
  Box,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { IoAddCircleOutline } from "react-icons/io5";
import CatalogueForm from "../forms/catalogue_form";
import "../../style/animation.css";

const NewCatalogueCard = ({addCatalogue, pUUID}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        mt="0"
        backgroundColor="#E1DEF1"
        width={["100%", "350px"]}
        height={["160px", "200px"]}
        color="white"
        mb="0"
        flexDirection="column"
        p={3}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="22px"
        onClick={onOpen}
        cursor="pointer"
        className="inflate"
      >
        <Box>
          <Flex justifyContent="space-around">
            <Box>
              <Text
                fontWeight="bold"
                fontSize={["20px", "25px"]}
                color="black"
                mt={3}
                data-testid= "new-catalogue-form"
              >
                New Catalogue
              </Text>
            </Box>
            <Box mt={3}>
              <IoAddCircleOutline fontSize={["47px"]} color="#757171" />
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
              <Text
                color="#757171"
                marginTop={["10px", "25px"]}
                fontSize="17px"
              >
                Create your own Catalogue!!!
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl" maxW="100vw">
        <ModalOverlay />
        <ModalContent mx="15px">
          <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
            New Catalogue
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <CatalogueForm onClose={onClose} add={true} func={addCatalogue} pUUID={pUUID}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewCatalogueCard;
