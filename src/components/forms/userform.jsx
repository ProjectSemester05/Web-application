import React,{useState} from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../../style/landing.css";
import { updateUser } from "../../utils/amplifyConf";
import ChangePasswordForm from "./changePassword";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/actions/userActions";
import FormLoader from "../FormLoader";

const UserForm = ({ user, closePopup }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  return (
    <Box my={8} textAlign="center">
      <>
        <Formik
          initialValues={user}
          validationSchema={Yup.object({
            firstName: Yup.string().max(50).required("First Name Required"),
            lastName: Yup.string().max(50).required("Last Name Required"),
          })}
          onSubmit={async (values) => {
            setLoading(true);
            let name = `${values.firstName} ${values.lastName}`;
            let result = await updateUser({ name: name });
            setLoading(false);
            if (result.success) {
              dispatch(
                setUserInfo({
                  firstName: values.firstName,
                  lastName: values.lastName,
                })
              );
              toast({
                title: "Success",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Error",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            }
            closePopup();
          }}
        >
          {(props) => (
            <Box>
            {loading && <FormLoader />}

              <Text fontSize="16px" color="tomato"></Text>
              <Stack isInline justifyContent="space-between" mt={4} mb={6}>
                <FormControl
                  isInvalid={props.errors.firstName && props.touched.firstName}
                  mr={2}
                >
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="firstName"
                    name="firstName"
                    variant="flushed"
                    value={props.initialValues.firstName}
                    {...props.getFieldProps("firstName")}
                    borderColor="black"
                    borderBottomWidth="1px"
                  />
                  <FormErrorMessage>{props.errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={props.errors.lastName && props.touched.lastName}
                  ml={2}
                >
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="lastName"
                    name="lastName"
                    value={props.initialValues.lastName}
                    {...props.getFieldProps("lastName")}
                    variant="flushed"
                    borderColor="black"
                    borderBottomWidth="1px"
                  />
                  <FormErrorMessage>{props.errors.lastName}</FormErrorMessage>
                </FormControl>
              </Stack>

              <FormControl
                isInvalid={props.errors.email && props.touched.email}
                mt="3"
              >
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  cursor="not-allowed"
                  isDisabled={true}
                  value={props.initialValues.email}
                  {...props.getFieldProps("email")}
                  variant="flushed"
                  borderColor="black"
                  borderBottomWidth="1px"
                />
                <FormErrorMessage>{props.errors.email}</FormErrorMessage>
              </FormControl>
              <Button
                onClick={onOpen}
                backgroundColor="#0F4C75"
                width="full"
                color="white"
                mt={4}
                loadingText="Signinig in"
                _hover={{ bg: "#0F4CAE" }}
              >
                Change Password
              </Button>
              <Button
                onClick={props.submitForm}
                backgroundColor="0F4C75"
                width="full"
                mt={4}
                border="1px"
              >
                <Text>Submit</Text>
              </Button>
            </Box>
          )}
        </Formik>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
              Change Password
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ChangePasswordForm onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default UserForm;
