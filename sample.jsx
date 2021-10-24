
import { Formik } from "formik";
import * as Yup from "yup";
import {
  createItem,
} from "../../api/catalogue";

const ItemForm = ({}) => {
  let initialValues = {
    Name: "",
  };

  return (
    <Box my={8} textAlign="center">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          let result = await createItem(values);
        }}
      >
        {(props) => (
          <Box>
              <FormControl>
                <FormLabel>Catalogue Name</FormLabel>
                <Input
                  type="text"
                  name="CatalogueName"
                  value={props.initialValues.CatalogueName}
                  {...props.getFieldProps("CatalogueName")}
                />
                <FormErrorMessage>
                  {props.errors.CatalogueName}
                </FormErrorMessage>
              </FormControl>
              <Button onClick={props.submitForm} id="catalogue_form_submit">
                Submit
              </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};



import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CatalogueForm from "../../../components/forms/catalogue_form.jsx";
import * as catalogueAPI from "../../../api/catalogue.jsx";


describe("item form tests", () =>{
    
    test("add new item,", () =>{
        let mockCreateItem = jest.spyOn(itemAPI, "createItem").mockImplementation((obj) => obj);
        let spy = jest.fn().mockImplementation((obj) => obj);

        render(<CatalogueForm add={true} test={spy}/>)
        const name = screen.getByRole('textbox',{name:"Name"})
        const submit = screen.getByRole('button',{id:"item_form_submit"})
        // console.log(submit);
        fireEvent.change(name,{target:{value:"Kitchen Item"}})
        fireEvent.click(submit);
        expect(mockCreateItem).toHaveBeenCalledWith({Name:"Kitchen Item"})
    })

})




