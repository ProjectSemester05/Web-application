import { React, useState } from "react";
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
  useToast,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { createItem } from "../../api/item";

const AddItemForm = ({ item, onClose, uuid, add, func, img }) => {
  const [image, setImage] = useState(img ? img: "")

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  const toast = useToast();
  let initialValues = add ? {
          ItemName: "",
          Description: "",
          StoredLocation: "",
        }: item
  return (
    <Box my={8} textAlign="center">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          ItemName: Yup.string().max(100).required("Required"),
          Description: Yup.string(),
          StoredLocation: Yup.string(),
          Date: Yup.date(),
        })}

        onSubmit={async (values) => {
          let result = {success: false}
          if(add){
            values.CatalogueUUID = uuid;
            result = await createItem(values);

          }
          else{
            console.log("Updating the item");
          }

          console.log(result);

          if (result.success) {
            toast({
              title: "Success",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            console.log(result);
            func(result.newItem)
            onClose();
          } else {
            toast({
              title: "Error",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
          onClose();
        }}
      >
        {(props) => (
          <Box>
            {img && (<Image src={image}  height={["120px", "150px"]} w={["120px", "150px"]} borderRadius="50%" mx="auto"/>)}
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
              <FormLabel>Stored Location</FormLabel>
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
            <FormControl
              isInvalid={
                props.errors.StoredLocation && props.touched.StoredLocation
              }
              mt="5"
            >
              <FormLabel>Reminder</FormLabel>
              <InputGroup>
                <Input
                  type="date"
                  name="Date"
                  value={props.initialValues.Date}
                  {...props.getFieldProps("Date")}
                  borderColor="black"
                  borderBottomWidth="1px"
                />
              </InputGroup>
              <FormErrorMessage>{props.errors.Date}</FormErrorMessage>
            </FormControl>
            <FormControl mr={2} mt="5">
              <FormLabel >Upload Image</FormLabel>
              <Input
                id="upload-image"
                variant="flushed"
                type="file"
                name="img"
                accept="image/png, image/gif, image/jpeg"
                onChange={onImageChange}
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
                Submit
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

export default AddItemForm;
