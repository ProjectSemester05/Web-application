import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { Formik } from "formik";
import {
  deleteCatalogue,
} from "../../api/catalogue";
import FormLoader from "../FormLoader";

const DeleteCatalogueForm = ({ onClose,onCloseMain, uuid, deleteFunc }) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();


  const deleteC = async () => {
    setLoading(true);
    let result = await deleteCatalogue(uuid);
    setLoading(false);
    if (result.success) {
      toast({
        title: "Success",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
      onCloseMain();
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

  return (
    <Box my={8} textAlign="center" data-testid="deletecatalogue-form">
      <Formik>
        {(props) => (
          <Box>
            {loading && <FormLoader />}
            <Text>Are you sure you want to delete the catalogue?</Text>
            <Flex justifyContent="flex-end">
              <Button
                onClick={deleteC}
                backgroundColor="#C04040"
                _hover={{ bg: "#c75a7c" }}
                opacity="0.7"
                width="100px"
                mt={4}
                border="1px"
                mr="2"
                color="white"
              >
                <Text>Confirm</Text>
              </Button>
              <Button
                onClick={onClose}
                backgroundColor="#0F4C75"
                _hover={{ bg: "#0F4CAE" }}
                width="100px"
                color="white"
                opacity="0.7"
                mt={4}
                ml="2"
              >
                Cancel
              </Button>
            </Flex>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default DeleteCatalogueForm;
