import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CatalogueForm from "../../../components/forms/catalogue_form.jsx";
import {createCatalogue} from"../../../api/catalogue.jsx"


describe("catalogue form tests", () =>{
    let mocks;
    beforeAll(() => {
        mocks = jest.mock("../../../api/catalogue.jsx",() =>({
            createCatalogue: jest.fn().mockImplementation((obj) => obj),
            updateCatalogue: jest.fn().mockImplementation((obj) => obj),
        }))
    })
    
    test("add new catalogue render test", () => {
        render(<CatalogueForm add={true}/>)
        const name = screen.getByRole('textbox',{name:"Catalogue Name"})
        fireEvent.change(name,{target:{value:"Kitchen Items"}})
        expect(name.value).toBe('Kitchen Items')
    })

    test("update catalogue render test", () => {
        render(<CatalogueForm add={false} catalogue={{CatalogueName :"Garage Items"}}/>)
        const name = screen.getByRole('textbox',{name:"Catalogue Name"})
        expect(name.value).toBe('Garage Items')
    })

    test("add new catalogue", () =>{
        render(<CatalogueForm add={true}/>)
        const name = screen.getByRole('textbox',{name:"Catalogue Name"})
        const submit = screen.getByRole('button',{name:"Submit"})
        fireEvent.change(name,{target:{value:"Kitchen Items"}})
        fireEvent.click(submit);
        console.log(createCatalogue.mock.calls);
        // expect(createCatalogue).toHaveBeenCalledWith({CatalogueName:"Kitchen Items"})
    })


})




