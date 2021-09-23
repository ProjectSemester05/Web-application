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
import { useDispatch } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { auth } from "../../redux/actions/userActions";

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

  const loginAmazon = () => {
    let options = {};
    options.scope = "profile";
    console.log(window.amazon);
    console.log(window);
    options.pkce = true;
    window.amazon.Login.authorize(options, function (response) {
      console.log("In");
      if (response.error) {
        console.log("oauth error " + response.error);
        return;
      }
      window.amazon.Login.retrieveToken(response.code, function (response) {
        if (response.error) {
          console.log("oauth error " + response.error);
          return;
        }
        window.amazon.Login.retrieveProfile(
          response.access_token,
          function (response) {
            console.log("Hello, " + response.profile.Name);
            console.log(
              "Your e-mail address is " + response.profile.PrimaryEmail
            );
            console.log("Your unique ID is " + response.profile.CustomerId);
            if (window.console && window.console.log)
              window.console.log(response);
          }
        );
      });
    });
  };

  // document.getElementById('LoginWithAmazon').onclick = function() {
  //   options = {}
  //   options.scope = 'profile';
  //   options.scope_data = {
  //       'profile' : {'essential': false}
  //   };
  //   amazon.Login.authorize(options,
  //       'https://www.example.com/handle_login.php');
  //   return false;

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
          dispatch(auth(values.email, values.password));
          history.push("/home");

          console.log(values);
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
                <Link href="#">Forget Your Password?</Link>
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
              Login
            </Button>
            <Button
              onClick={loginAmazon}
              backgroundColor="0F4C75"
              width="full"
              mt={4}
              loadingText="Signing in"
              border="1px"
              id="LoginWithAmazon"
            >
              <img
                border="0"
                alt="Login with Amazon"
                src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
                width="156"
                height="32"
              />
              {/* <Text>Log in with Amazon</Text> */}
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default LoginArea;
