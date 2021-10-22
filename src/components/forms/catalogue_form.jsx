import React, { useState } from "react";
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
  Image,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  createCatalogue,
  deleteCatalogue,
  updateCatalogue,
} from "../../api/catalogue";
import { uploadImage } from "../../utils/s3FileUpload";

const CatalogueForm = ({
  add,
  catalogue,
  onClose,
  uuid,
  func,
  deleteFunc,
  parentCatalogue,
  pUUID,
  img,
  test,
}) => {
  let initialValues = add
    ? {
        CatalogueName: "",
      }
    : catalogue;

  const [image, setImage] = useState(
    img ? img : "/assets/images/default-catalogue.jpg"
  );
  const [blobImg, setBlobImg] = useState({});
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setBlobImg({ file: event.target.files[0] });
    }
  };

  const deleteC = async () => {
    let result = await deleteCatalogue(uuid);
    if (result.success) {
      toast({
        title: "Success",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
      deleteFunc(uuid);
    } else {
      toast({
        title: "Error during deletion.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const toast = useToast();
  return (
    <Box my={8} textAlign="center">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          CatalogueName: Yup.string()
            .max(50)
            .required("Catalogue Name Required"),
        })}
        onSubmit={async (values) => {
          let result = { success: false };
          try {
            if (blobImg.hasOwnProperty("file")) {
              result = await uploadImage(blobImg.file);
              if (result.success) {
                values.ImageUrl = result.result.location;
              }
            }
            if (pUUID) {
              values.ParentCatalogueUUID = pUUID;
            }

            if (add) {
              result = await createCatalogue(values);
            } else {
              values.UUID = uuid;
              result = await updateCatalogue(values);
            }
            if (result.success) {
              toast({
                title: "Success",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              console.log(JSON.stringify(result));
              func(result.newCatalogue);

              onClose();
            } else {
              toast({
                title: "Error",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            }
          } catch (error) {
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
          <Box>
            <Text fontSize="16px" color="tomato"></Text>
            <Box position="relative">
              <Image
                src={image}
                height={["120px", "150px"]}
                w={["120px", "150px"]}
                borderRadius="50%"
                mx="auto"
              />
              {/* <IconButton position="absolute" aria-label="Add Image" icon={<RiImageAddLine />} /> */}
            </Box>
            <Stack isInline justifyContent="space-between" mt={4} mb={6}>
              <FormControl
                isInvalid={
                  props.errors.CatalogueName && props.touched.CatalogueName
                }
                mr={2}
              >
                <FormLabel>Catalogue Name</FormLabel>
                <Input
                  type="text"
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
              <FormLabel>Upload Image</FormLabel>
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
                // onClick={props.submitForm}
                onClick={props.submitForm}
                id="catalogue_form_submit"
                backgroundColor="#0F4C75"
                width="100px"
                color="white"
                opacity="0.7"
                mt={4}
                mr="2"
              >
                Submit
              </Button>
              {!add && (
                <Button
                  onClick={deleteC}
                  backgroundColor="#C04040"
                  opacity="0.7"
                  width="100px"
                  mt={4}
                  border="1px"
                  ml="2"
                  color="white"
                >
                  <Text>Delete</Text>
                </Button>
              )}
            </Flex>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default CatalogueForm;
