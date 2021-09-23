import { React } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { createCatalogue } from "../../api/catalogue";

const NewCatalogueForm = ({ onClose }) => {
  const toast = useToast();
  return (
    <Box my={8} textAlign="center">
      <Formik
        initialValues={{
          CatalogueName: "",
        }}
        validationSchema={Yup.object({
          CatalogueName: Yup.string()
            .max(50)
            .required("Catalogue Name Required"),
        })}
        onSubmit={async (values) => {
          console.log(values);

          let result = await createCatalogue(values);
          
          if (result.success) {
            toast({
              title: "Catalogue created",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Error during creation.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        }}
      >
        {(props) => (
          <Box>
            <Text fontSize="16px" color="tomato"></Text>
            <Stack isInline justifyContent="space-between" mt={4} mb={6}>
              <FormControl
                isInvalid={
                  props.errors.CatalogueName && props.touched.CatalogueName
                }
                mr={2}
              >
                <FormLabel>Catalogue Name</FormLabel>
                <Input
                  type="catalogueName"
                  variant="flushed"
                  name="CatalogueName"
                  value={props.initialValues.CatalogueName}
                  {...props.getFieldProps("CatalogueName")}
                />
                <FormErrorMessage>
                  {props.errors.CatalogueName}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <FormControl mr={2}>
              <FormLabel >Upload Image</FormLabel>
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
