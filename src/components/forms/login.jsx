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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";

const VARIANT_COLOR = "teal";

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
    </Flex>
  );
};

const LoginForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const handlePasswordShow = () => setPasswordShow(!passwordShow);

  // const loginAmazon = () => {
  //     let options = {}
  //     options.scope = 'profile';
  //     options.scope_data = {
  //         'profile' : {'essential': false}
  //     };
  //     amazon.Login.authorize(options,
  //         'https://www.example.com/handle_login.php');
  //     return false;
  // }

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
                  value={props.initialValues.email}
                  {...props.getFieldProps("email")}
                  border="0"
                  borderBottom="1px"
                  borderRadius="0"
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
            <Stack isInline justifyContent="space-between" mt={4}>
              <Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>
              <Box>
                <Link color={`${VARIANT_COLOR}.500`} href="#">
                  Forget Your Password?
                </Link>
              </Box>
            </Stack>
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
              //onClick={loginAmazon}
              backgroundColor="0F4C75"
              width="full"
              mt={4}
              loadingText="Signing in"
              border="1px"
              id="LoginWithAmazon"

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
