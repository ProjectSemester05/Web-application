import { React, useState } from "react";
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
  extendTheme,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import "@fontsource/montserrat";
import "../../style/landing.css";
import { registerUser } from "../../api/user";
import { useHistory } from 'react-router-dom';

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

const SignUpArea = () => {

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
        <SignUpForm />
      </Box>
    </Flex>
  );
};

const SignUpForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const handlePasswordShow = () => setPasswordShow(!passwordShow);
	const history = useHistory();

  return (
    <Box my={8} textAlign="center">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(50).required("First Name Required"),
          lastName: Yup.string().max(50).required("Last Name Required"),
          email: Yup.string()
            .max(100)
            .email("Invalid email")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          //					onAuth(values.email, values.password, onLogin);
          //registerUser(data)
          console.log(values);
          history.push("/home")
        }}
      >
        {(props) => (
          <Box theme={theme}>
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
                value={props.initialValues.email}
                {...props.getFieldProps("email")}
                variant="flushed"
                borderColor="black"
                borderBottomWidth="1px"
              />
              <FormErrorMessage>{props.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={props.errors.password && props.touched.password}
              mt="3"
            >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={passwordShow ? "text" : "password"}
                  name="password"
                  value={props.initialValues.password}
                  {...props.getFieldProps("password")}
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
              <FormErrorMessage>{props.errors.password}</FormErrorMessage>
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
            >
              Sign Up
            </Button>
            <Button
              onClick={props.submitForm}
              backgroundColor="0F4C75"
              width="full"
              mt={4}
              loadingText="Signinig in"
              border="1px"
            >
              <Text>Sign Up with Amazon</Text>
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default SignUpArea;
