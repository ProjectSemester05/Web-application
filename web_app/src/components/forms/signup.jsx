import { React, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  IconButton,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Flex,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  extendTheme,
  Image,
} from "@chakra-ui/react";
//import amazon from '../../assets/images/amazon.png'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import "@fontsource/montserrat";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

const LoginArea = ({ onLogin }) => {
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
        <LoginForm onLogin={onLogin} />
      </Box>
    </Flex>
  );
};

LoginArea.propTypes = {
  onLogin: PropTypes.func.isRequired,
};



const LoginForm = ({ onLogin }) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const handlePasswordShow = () => setPasswordShow(!passwordShow);

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
        onSubmit={(values) => {
          //					onAuth(values.email, values.password, onLogin);
        }}
      >
        {(props) => (
          <Box theme={theme}>
            <Text fontSize="16px" color="tomato">
            </Text>
            <Stack isInline justifyContent="space-between" mt={4} mb={6}>
              <FormControl
                isInvalid={props.errors.email && props.touched.email}
                mr={2}
              >
                <FormLabel>First Name</FormLabel>
                <Input
                  type="firstName"
                  name="firstName"
                  value={props.initialValues.email}
                  {...props.getFieldProps("email")}
                  border="0"
                  borderBottom="1px"
                  borderRadius="0"
                />
                <FormErrorMessage>{props.errors.password}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={props.errors.email && props.touched.email}
                ml={2}
              >
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={props.initialValues.email}
                  {...props.getFieldProps("email")}
                  border="0"
                  borderBottom="1px"
                  borderRadius="0"
                />
                <FormErrorMessage>{props.errors.password}</FormErrorMessage>
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
                border="0"
                borderBottom="1px"
                borderRadius="0"
              />
              <FormErrorMessage>{props.errors.password}</FormErrorMessage>
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
                  border="0"
                  borderBottom="1px"
                  borderRadius="0"
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

export default LoginArea;
