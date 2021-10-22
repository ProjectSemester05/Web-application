import  React  from "react";
import {
  Input,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <InputGroup onClick={onOpen}>
        <InputLeftElement
          pointerEvents="none"
          children={<FaSearch color="gray.300" />}
        />
        <Input
          backgroundColor="white"
          placeholder="Search"
          background="rgba(255, 253, 253, 0.44)"
          boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
        />
      </InputGroup>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" maxW="100vw">
        <ModalOverlay />
        <ModalContent mx="15px">
          <ModalBody>
            <InputGroup>
              <Input
                backgroundColor="white"
                placeholder="Search"
                w="full"
                background="rgba(255, 253, 253, 0.44)"
                boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
              />
              <InputRightElement
                pointerEvents="none"
                children={<FaSearch color="gray.300" />}
              />
            </InputGroup>{" "}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchBar;
