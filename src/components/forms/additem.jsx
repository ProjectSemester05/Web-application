import { React } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  InputGroup,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { createItem } from "../../api/item";

const AddItemForm = ({ onClose, uuid }) => {
  return (
    <Box my={8} textAlign="center">
      <Formik
        initialValues={{
          ItemName: "",
          Description: "",
          StoredLocation: "",
        }}
        validationSchema={Yup.object({
          ItemName: Yup.string().max(100).required("Required"),
          Description: Yup.string(),
          StoredLocation: Yup.string(),
        })}
        onSubmit={async (values) => {
          values.CatalogueUUID = uuid;
          let result = await createItem(values);
          console.log(result);
          onClose();
        }}
      >
        {(props) => (
          <Box>
            <FormControl
              isInvalid={props.errors.ItemName && props.touched.ItemName}
              mr={2}
            >
              <FormLabel>Item name</FormLabel>
              <Input
                name="ItemName"
                value={props.initialValues.ItemName}
                {...props.getFieldProps("ItemName")}
                borderColor="black"
                borderBottomWidth="1px"
              />
              <FormErrorMessage>{props.errors.ItemName}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={props.errors.Description && props.touched.Description}
              mt="5"
            >
              <FormLabel>Description</FormLabel>
              <InputGroup>
                <Textarea
                  type={"text"}
                  name="Description"
                  value={props.initialValues.Description}
                  {...props.getFieldProps("Description")}
                  borderColor="black"
                  borderBottomWidth="1px"
                />
              </InputGroup>
              <FormErrorMessage>{props.errors.Description}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={
                props.errors.StoredLocation && props.touched.StoredLocation
              }
              mt="5"
            >
              <FormLabel>StoredLocation</FormLabel>
              <InputGroup>
                <Input
                  type={"text"}
                  name="StoredLocation"
                  value={props.initialValues.StoredLocation}
                  {...props.getFieldProps("StoredLocation")}
                  borderColor="black"
                  borderBottomWidth="1px"
                />
              </InputGroup>
              <FormErrorMessage>{props.errors.StoredLocation}</FormErrorMessage>
            </FormControl>

            <Button
              onClick={props.submitForm}
              backgroundColor="#0F4C75"
              width="full"
              color="white"
              mt={4}
            >
              Submit
            </Button>
            <Button backgroundColor="0F4C75" width="full" mt={4} border="1px">
              <Text>Cancel</Text>
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default AddItemForm;
