import React, { useState } from "react";
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
  useToast
  
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../../style/landing.css";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { changePassword } from "../../utils/amplifyConf";
import FormLoader from "../FormLoader";


const ChangePasswordForm = ({ onClose }) => {
  const toast = useToast();
  const [cpasswordShow, setCPasswordShow] = useState(false);
  const [npasswordShow, setNPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Box my={4} textAlign="center">
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
        }}
        validationSchema={Yup.object({
          currentPassword: Yup.string().max(50),
          newPassword: Yup.string()
          .required("Required")
          .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
          ).max(50),
        })}
        onSubmit={async (values) => {
          setLoading(true);
          let result = await changePassword(
            values.currentPassword,
            values.newPassword
          );
          setLoading(false);
          if (result.success) {
            onClose();
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
        }}
      >
        {(props) => (
          <Box data-testid="change-pass">
            {loading && <FormLoader />}
            <Text fontSize="16px" color="tomato"></Text>
            <FormControl
              isInvalid={
                props.errors.currentPassword && props.touched.currentPassword
              }
              mt="3"
            >
              <FormLabel>Current Password</FormLabel>
              <InputGroup>
                <Input
                  data-testid="cpasswd"
                  type={cpasswordShow ? "text" : "password"}
                  name="Password"
                  value={props.initialValues.currentPassword}
                  {...props.getFieldProps("currentPassword")}
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
                      cpasswordShow ? "Hide Password" : "Show Password"
                    }
                    onClick={() => {
                      setCPasswordShow(!cpasswordShow);
                    }}
                    icon={cpasswordShow ? <ViewIcon />: <ViewOffIcon /> }
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {props.errors.currentPassword}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={props.errors.newPassword && props.touched.newPassword}
              mt="3"
            >
              <FormLabel>New Password</FormLabel>
              <InputGroup>
                <Input
                  data-testid="npasswd"
                  type={npasswordShow ? "text" : "password"}
                  name="NewPassword"
                  value={props.initialValues.newPassword}
                  {...props.getFieldProps("newPassword")}
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
                      npasswordShow ? "Hide Password" : "Show Password"
                    }
                    onClick={() => {
                      setNPasswordShow(!npasswordShow);
                    }}
                    icon={npasswordShow ?  <ViewIcon />: <ViewOffIcon />}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{props.errors.newPassword}</FormErrorMessage>
            </FormControl>

            <Stack inline>
              <Button
                onClick={props.submitForm}
                _hover={{ bg: "#0F4CAE" }}
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

export default ChangePasswordForm;
