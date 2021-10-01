import { React } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
  Stack
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import "@fontsource/montserrat";
import "../../style/landing.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/actions/userActions";
import { confirmSignUp, resendConfirmationCode, signIn } from "../../utils/amplifyConf";

const VerificationForm = ({ email, password }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Box my={4} textAlign="center">
      <Formik
        initialValues={{
          code: "",
        }}
        validationSchema={Yup.object({
          code: Yup.string().max(50).required("Required"),
        })}
        onSubmit={async (values) => {
          let result = await confirmSignUp(email, values.code);
          if(result.success){
            result = await signIn(email,password)
            if(result.success){
                dispatch(auth())
                history.push("/home")
            }
          }
        }}
      >
        {(props) => (
          <Box>
            <Text fontSize="16px" color="tomato"></Text>
            <FormControl
              isInvalid={props.errors.code && props.touched.code}
              mr={2}
            >
              <FormLabel>Code</FormLabel>
              <Input
                type="text"
                name="code"
                value={props.initialValues.code}
                {...props.getFieldProps("code")}
                borderColor="black"
                borderBottomWidth="1px"
              />
              <FormErrorMessage>{props.errors.code}</FormErrorMessage>
            </FormControl>
            <Stack inline>
              <Button
                onClick={props.submitForm}
                backgroundColor="#0F4C75"
                color="white"
                mt={4}
              >
                Validate
              </Button>
              <Button
                onClick={() =>{resendConfirmationCode(email)}}
                backgroundColor="#0F4C75"
                color="white"
                mt={4}
              >
                Resend Code
              </Button>
            </Stack>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default VerificationForm;
