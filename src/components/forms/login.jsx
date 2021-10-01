import { React, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Link,
  Flex,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { auth } from "../../redux/actions/userActions";
import { signIn, lwaSignUp } from "../../utils/amplifyConf";
import ForgottenPasswordForm from "./forgotPassword";

const LoginArea = () => {
  return (
    <Flex
      //   minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      mt="10px"
    >
      <Box
        px={8}
        py={4}
        maxWidth="600px"
        borderRadius={10}
        width="full"
        bg="transparent"
      >
        <LoginForm />
      </Box>
      <script type="text/javascript"></script>
    </Flex>
  );
};

const LoginForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const handlePasswordShow = () => setPasswordShow(!passwordShow);
  const history = useHistory();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const AmazonSignIn = async () => {
    let result = await lwaSignUp();
  };

  return (
    <Box my={8} textAlign="center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .max(100)
            .email("Invalid email")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={async (values) => {
          let result = await signIn(values.email, values.password);
          if (result.success) {
            dispatch(auth());

            history.push("/home");
          }
        }}
      >
        {(props) => (
          <Box>
            <Text fontSize="16px" color="tomato"></Text>
            <Stack isInline justifyContent="space-between" mt={4}>
              <FormControl
                isInvalid={props.errors.email && props.touched.email}
                mr={2}
              >
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  variant="flushed"
                  value={props.initialValues.email}
                  {...props.getFieldProps("email")}
                  borderColor="black"
                  borderBottomWidth="1px"
                />
                <FormErrorMessage>{props.errors.email}</FormErrorMessage>
              </FormControl>
            </Stack>
            <FormControl
              isInvalid={props.errors.password && props.touched.password}
              mt="5"
            >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={passwordShow ? "text" : "password"}
                  name="password"
                  variant="flushed"
                  value={props.initialValues.password}
                  {...props.getFieldProps("password")}
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
              <FormErrorMessage>{props.errors.password}</FormErrorMessage>
            </FormControl>
            <Stack isInline justifyContent="space-between" mt={4}>
              <Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>
              <Box>
                <Link onClick={onOpen}>Forget Your Password?</Link>
              </Box>
            </Stack>
            <Button
              onClick={props.submitForm}
              backgroundColor="#0F4C75"
              _hover ={{bg:"#0F4CAE"}}
              width="full"
              color="white"
              mt={4}
              variant="solid"
              id="login-normal"
            >
              Login
            </Button>
          </Box>
        )}
      </Formik>
      <Button
        onClick={AmazonSignIn}
        backgroundColor="0F4C75"
        width="full"
        mt={4}
        border="1px"
      >
        <Text>Log In with Amazon</Text>
      </Button>
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reset Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                    <ForgottenPasswordForm onClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LoginArea;
