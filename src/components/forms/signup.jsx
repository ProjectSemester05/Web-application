import React, {useState } from "react";
import {
  Box,
  Button,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Flex,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import "@fontsource/montserrat";
import "../../style/landing.css";
import { signUp, lwaSignUp } from "../../utils/amplifyConf";
import ValidationForm from "./verification";

const SignUpArea = () => {
  return (
    <Flex width="full" align="center" justifyContent="center" mt="10px">
      <Box
        px={8}
        py={4}
        maxWidth="600px"
        borderRadius={10}
        width="full"
        bg="transparent"
      >
        <SignUpForm />
      </Box>
    </Flex>
  );
};

const SignUpForm = () => {
  let toast = useToast();
  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlePasswordShow = () => setPasswordShow(!passwordShow);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box my={8} textAlign="center">
      <>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            Email: "",
            Password: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().max(50).required("First Name Required"),
            lastName: Yup.string().max(50).required("Last Name Required"),
            Email: Yup.string()
              .max(100)
              .email("Invalid email")
              .required("Required"),
            Password: Yup.string()
              .required("Required")
              .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character"
              ),
          })}
          onSubmit={async (values) => {
            setEmail(values.Email);
            setPassword(values.Password);
            values.Name = `${values.firstName} ${values.lastName}`;
            let result = await signUp(
              values.Name,
              values.Email,
              values.Password
            );
            if (result.success) {
              onOpen();
            } else {
              console.log(result);
              toast({
                title: "error",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
              });
            }
          }}
        >
          {(props) => (
            <Box>
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
                isInvalid={props.errors.Email && props.touched.Email}
                mt="3"
              >
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="Email"
                  value={props.initialValues.Email}
                  {...props.getFieldProps("Email")}
                  variant="flushed"
                  borderColor="black"
                  borderBottomWidth="1px"
                />
                <FormErrorMessage>{props.errors.Email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={props.errors.Password && props.touched.Password}
                mt="3"
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={passwordShow ? "text" : "password"}
                    name="Password"
                    value={props.initialValues.Password}
                    {...props.getFieldProps("Password")}
                    variant="flushed"
                    borderColor="black"
                    borderBottomWidth="1px"
                  />
                  <InputRightElement width="4.5rem">
                    <IconButton
                      variant="unstyled"
                      colorScheme="teal"
                      size="md"
                      aria-label={
                        passwordShow ? "Hide Password" : "Show Password"
                      }
                      onClick={handlePasswordShow}
                      icon={passwordShow ? <ViewOffIcon /> : <ViewIcon />}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{props.errors.Password}</FormErrorMessage>
              </FormControl>
              <Box>
                <Text>
                  *contains at least one uppercase, one number, or special
                  character
                </Text>
              </Box>
              <Button
                onClick={props.submitForm}
                backgroundColor="#0F4C75"
                width="full"
                color="white"
                mt={4}
                loadingText="Signinig in"
                _hover={{ bg: "#0F4CAE" }}
              >
                Sign Up
              </Button>
              <Button
                onClick={lwaSignUp}
                backgroundColor="0F4C75"
                width="full"
                mt={4}
                border="1px"
              >
                <Text>Sign Up with Amazon</Text>
              </Button>
            </Box>
          )}
        </Formik>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
              Validation Code
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Enter the validation code send to your email</Text>
              <ValidationForm email={email} password={password} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default SignUpArea;
