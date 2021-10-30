import  React  from "react";
import { Box, Text, Flex, Image, Stack, Button,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import "../../style/animation.css"
import { EditIcon } from "@chakra-ui/icons";
import CatalogueForm from "../forms/catalogue_form"


const CatalogueCard = ({ name, iCount, cCount, img, uuid, deleteCatalogue, updateCatalogue , pUUID }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  let catalogue={CatalogueName: name}
  return (
    <>

    <Flex
      mt={["20px", "0"]}
      backgroundColor="#E1DEF1"
      width={["100%", "100%","100%","350px"]}
      height={["160px", "200px"]}
      maxW="350px"
      color="white"
      mb="0"
      flexDirection="column"
      p={3}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="22px"
      cursor="pointer"
      className = "inflate"
      
    >
    <Flex flexDirection="column">
      <Flex justifyContent="space-around" data-testname ={`up_card`} onClick={() => {
        history.push("/catalogues",{uuid:uuid, catalogueName: name});
      }}>
        <Box>
          <Text
            fontWeight="bold"
            fontSize={["18px","18px","18px", "20px"]}
            lineHeight="37px"
            color="black"
            // maxW ="100px"
            // whiteSpace = "nowrap"
            mt={3}
          >
            {name}
          </Text>
          <Box height="1.5px" background="black"></Box>
        </Box>
        <Box>
          <Image src={img? img: "/assets/images/default-catalogue.jpg"} height={["75px", "90px"]} w="auto" borderRadius="full"/>
        </Box>
      </Flex>
      <Flex justifyContent="space-around" mt={["5px", "5px"]}>
        <Stack isInline>
          <Text fontWeight="bold" color="black">
            {iCount}
          </Text>
          <Text color="#757171">Items</Text>
        </Stack>
        <Stack isInline>
          <Text fontWeight="bold" color="black">
            {cCount}
          </Text>
          <Text color="#757171">Sub Catalogues</Text>
        </Stack>
      </Flex>
      </Flex>
      <Flex mt={[0,3]} mb={[3,0]} justifyContent="flex-end">
          <Button data-testid ={`${uuid}_edit`} background="blackAlpha" fontSize="22px" onClick={onOpen} mr="2">
            <EditIcon color="black"/>
          </Button>
      </Flex>

    </Flex>
    
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
              Edit Catalogue
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <CatalogueForm add={false} onClose={onClose} catalogue={catalogue} uuid={uuid} deleteFunc={deleteCatalogue} img={img} func={updateCatalogue} pUUID={pUUID}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </> 
  );
};

export default CatalogueCard;
