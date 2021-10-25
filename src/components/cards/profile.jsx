import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Stack,
  Button,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { signOut } from "../../utils/amplifyConf";
import { useHistory } from "react-router-dom";
import UserForm from "../forms/userform"
import { useSelector } from 'react-redux';



const UserProfile = () => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let user = useSelector((state) => state.user);
  const logOut = () => {
    signOut();
    history.push("/");
  };

  return (
    <>
      <Flex
        width="280px"
        color="black"
        mb="0"
        flexDirection="column"
        backgroundColor="white"
        borderRadius="2px"
        boxShadow="lg"
        justifyContent="center"
        p="4px"
      >
        <Box px="auto">
          <Image
            src={"/assets/images/user.png"}
            h="100px"
            mx="auto"
            boxShadow="lg"
            borderRadius="50%"
          />
        </Box>
        <Box>
          <Box textAlign="center" mt="3">
            <Text fontWeight="bold" fontSize="20px">
              {user.firstName}
            </Text>
            <Flex justifyContent="space-around" mt="4">
              <Stack>
                <Text fontWeight="bold" fontSize="18px">
                  6
                </Text>
                <Text color="#727272" lineHeight="0px" fontSize="13px">
                  CATALOGUES
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight="bold" fontSize="18px">
                  21
                </Text>
                <Text color="#727272" lineHeight="0px" fontSize="13px">
                  ITEMS
                </Text>
              </Stack>
            </Flex>
          </Box>
        </Box>
        {!user.provider && (<Flex mt="20px" jusitifyContent="center" flexDir="column">
          <Divider />
          <Button variant="outline" mt="3" w="full" onClick={onOpen}>
            Profile
          </Button>
        </Flex>)}
        <Flex mb="20px" mt={user.provider ? "20px": "0px"}jusitifyContent="center" flexDir="column">
          <Divider />
          <Button variant="outline" mt="3" onClick={logOut}>
            Sign out
          </Button>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
            Profile
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <UserForm user={user} closePopup={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserProfile;
