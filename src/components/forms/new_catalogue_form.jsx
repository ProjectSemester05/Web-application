import { React, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import "@fontsource/montserrat";
import "../../style/landing.css";

const NewCatalogueForm = ({onClose}) => {
  return (
    <Box my={8} textAlign="center">
      <Formik
        initialValues={{
          catalogueName: "",
        }}
        validationSchema={Yup.object({
          catalogueName: Yup.string()
            .max(50)
            .required("Catalogue Name Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
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
                <FormLabel>Catalogue Name</FormLabel>
                <Input
                  type="firstName"
                  variant="flushed"
                  name="firstName"
                  value={props.initialValues.firstName}
                  {...props.getFieldProps("firstName")}
                />
                <FormErrorMessage>{props.errors.firstName}</FormErrorMessage>
              </FormControl>
            </Stack>
            <FormControl
              isInvalid={props.errors.firstName && props.touched.firstName}
              mr={2}
            >
              <FormLabel for="upload-image">Upload Image</FormLabel>
              <Input
                id="upload-image"
                variant="flushed"
                type="file"
                name="img"
                accept="image/png, image/gif, image/jpeg"
              />
            </FormControl>
            <Flex justifyContent="flex-end">
              <Button
                onClick={props.submitForm}
                backgroundColor="#0F4C75"
                width="100px"
                color="white"
                opacity="0.7"
                mt={4}
                mr="2"
              >
                Add
              </Button>
              <Button
                onClick={onClose}
                backgroundColor="#C04040"
                opacity="0.7"
                width="100px"
                mt={4}
                border="1px"
                ml="2"
                color="white"
              >
                <Text>Cancel</Text>
              </Button>
            </Flex>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default NewCatalogueForm;
