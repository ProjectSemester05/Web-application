import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CatalogueForm from "../../../components/forms/catalogue_form.jsx";
import * as catalogueAPI from "../../../api/catalogue.jsx";
import {
    getCatalogues,
    updateCatalogue,
    createCatalogue,
  } from "../../mocks/catalogue.js";
  


describe("catalogue form tests", () =>{
    let mockGetCatalogues;
    let mockDeleteCatalogue;
    let mockUpdateCatalogue;
    let mockCreateCatalogue;
  
    let cardContainer;
  
  
    beforeAll(() => {
      mockGetCatalogues = jest
        .spyOn(catalogueAPI, "getCatalogues")
        .mockResolvedValue(getCatalogues);
      mockDeleteCatalogue = jest
        .spyOn(catalogueAPI, "deleteCatalogue")
        .mockResolvedValue({ success: true });
      mockUpdateCatalogue = jest
        .spyOn(catalogueAPI, "updateCatalogue")
        .mockResolvedValue({ ...updateCatalogue, success: true });
      mockCreateCatalogue = jest
        .spyOn(catalogueAPI, "createCatalogue")
        .mockResolvedValue({ ...createCatalogue, success: true });
    });
  
    afterAll(() => {
      jest.clearAllMocks();
    });
  
    
    test.skip("add new catalogue render test", () => {
        render(<CatalogueForm add={true}/>)
        const name = screen.getByRole('textbox',{name:"Catalogue Name"})
        expect(name.value).toBe('')
    })

    test.skip("update catalogue render test", () => {
        render(<CatalogueForm add={false} catalogue={{CatalogueName :"Garage Items"}}/>)
        const name = screen.getByRole('textbox',{name:"Catalogue Name"})
        expect(name.value).toBe('Garage Items')
    })

    test("add new catalogue", () =>{
        render(<CatalogueForm add={true} />)
        const name = screen.getByRole('textbox',{name:"Catalogue Name"})
        const submit = screen.getByRole('button',{id:"catalogue_form_submit"})
        // console.log(submit);
        fireEvent.change(name,{target:{value:"Kitchen Items"}})
        fireEvent.click(submit);
        expect(mockCreateCatalogue).toHaveBeenCalledWith({CatalogueName:"Kitchen Items"})
    })

   

})




