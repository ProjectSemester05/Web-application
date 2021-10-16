import { React, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
  Stack,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import "@fontsource/montserrat";
import "../../style/landing.css";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import {
  forgotPasswordEmail,
  forgotPasswordSubmit,
} from "../../utils/amplifyConf";

const ForgottenPasswordForm = ({ onClose }) => {
  const [emailSent, setEmailSent] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const handlePasswordShow = () => setPasswordShow(!passwordShow);
  
  const forgotSubmit = async ({values}) => {
    let result = {};
    if (!emailSent) {

      result = await forgotPasswordEmail(values.email);
    } else {
      result = await forgotPasswordSubmit(
        values.email,
        values.code,
        values.password
      );
    }
    if (result.success && emailSent) {
      onClose();
    } else if (result.success && !emailSent) {
      setEmailSent(true);
    }
  }


  return (
    <Box my={4} textAlign="center">
      <Formik
        initialValues={{
          code: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          code: Yup.string().max(50),
          email: Yup.string()
            .max(100)
            .email("Invalid email")
            .required("Required"),
          password: Yup.string().max(50),
        })}
      >
        {(_props) => (
          <Box>
            <Text fontSize="16px" color="tomato"></Text>
            <FormControl
              isInvalid={_props.errors.email && _props.touched.email}
              mr={2}
            >
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                name="code"
                value={_props.initialValues.email}
                {..._props.getFieldProps("email")}
                borderColor="black"
                borderBottomWidth="1px"
              />
              <FormErrorMessage>{_props.errors.email}</FormErrorMessage>
            </FormControl>

            {emailSent && (
              <Box>
                <FormControl
                  isInvalid={_props.errors.code && _props.touched.code}
                  mr={2}
                  mt={3}
                >
                  <FormLabel>Code</FormLabel>
                  <Input
                    type="text"
                    name="code"
                    value={_props.initialValues.code}
                    {..._props.getFieldProps("code")}
                    borderColor="black"
                    borderBottomWidth="1px"
                  />
                  <FormErrorMessage>{_props.errors.code}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={_props.errors.password && _props.touched.password}
                  mr={2}
                  mt={3}
                >
                  <FormLabel>New Password</FormLabel>

                <InputGroup>
                  <Input
                    type={passwordShow ? "text" : "password"}
                    name="password"
                    value={_props.initialValues.password}
                    {..._props.getFieldProps("password")}
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
                <FormErrorMessage>{_props.errors.password}</FormErrorMessage>

                </FormControl>

              </Box>
            )}

            <Stack inline>
              <Button
                onClick={() =>forgotSubmit(_props)}
                backgroundColor="#0F4C75"
                color="white"
                mt={4}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default ForgottenPasswordForm;