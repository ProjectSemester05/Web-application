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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  createCatalogue,
  updateCatalogue,
} from "../../api/catalogue";
import { uploadImage } from "../../utils/s3FileUpload";
import FormLoader from "../FormLoader";
import DeleteCatalogueForm from "./catalogue_delete";

const CatalogueForm = ({
  add,
  catalogue,
  onClose,
  uuid,
  func,
  deleteFunc,
  pUUID,
  img,
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
  const [loading, setLoading] = useState(false);
  const deleteConfirmation = useDisclosure();
  const toast = useToast();
  

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setBlobImg({ file: event.target.files[0] });
    }
  };


  return (
    <Box my={8} textAlign="center" data-testid="addcatalogue-form">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          CatalogueName: Yup.string()
            .max(50)
            .required("Catalogue Name Required"),
        })}
        onSubmit={async (values) => {
          let result = { success: false };
          let imgError = "";
          try {
            setLoading(true);
            if (blobImg.hasOwnProperty("file")) {
              result = await uploadImage(blobImg.file);
              if (result.success) {
                values.ImageUrl = result.result.location;
              } else {
                imgError = "Could not upload image";
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
            setLoading(false);

            if (result.success) {
              let title =
                imgError.length > 0 ? "Image not uploaded" : "Success";
              let status = imgError.length > 0 ? "warning" : "success";
              toast({
                title: title,
                status: status,
                duration: 9000,
                isClosable: true,
              });
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
            {loading && <FormLoader />}
            <Box position="relative">
              <Image
                src={image}
                height={["120px", "150px"]}
                w={["120px", "150px"]}
                borderRadius="50%"
                mx="auto"
              />
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
                onClick={props.submitForm}
                id="catalogue_form_submit"
                backgroundColor="#0F4C75"
                _hover={{ bg: "#0F4CAE" }}
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
                  onClick={deleteConfirmation.onOpen}
                  backgroundColor="#C04040"
                  _hover={{ bg: "#c75a7c" }}
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
      <Modal isOpen={deleteConfirmation.isOpen} onClose={deleteConfirmation.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader backgroundColor="#141B57" opacity="0.7" color="white">
            Delete Confirmation
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DeleteCatalogueForm onClose={deleteConfirmation.onClose}uuid={uuid}  deleteFunc={deleteFunc} onCloseMain={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CatalogueForm;
