import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CatalogueForm from "../../../components/forms/catalogue_form.jsx";
import * as catalogueAPI from "../../../api/catalogue.jsx";


describe("catalogue form tests", () =>{
    let mockCreateCatalogue;
    beforeAll(() => {

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
        let mockCreateCatalogue = jest.spyOn(catalogueAPI, "createCatalogue").mockImplementation((obj) => obj);
        let spy = jest.fn().mockImplementation((obj) => obj);

        render(<CatalogueForm add={true} test={spy}/>)
        const name = screen.getByRole('textbox',{name:"Catalogue Name"})
        const submit = screen.getByRole('button',{id:"catalogue_form_submit"})
        // console.log(submit);
        fireEvent.change(name,{target:{value:"Kitchen Items"}})
        fireEvent.click(submit);
        // expect(mockCreateCatalogue).toHaveBeenCalledWith({CatalogueName:"Kitchen Items"})
        await waitFor(() => expect(spy).toHaveBeenCalled())
    })

    test('components/Button', () => {
            const mockOnClick = jest.fn();
            const { getByRole } = render(
                <button onClick={mockOnClick}>
                    My Button
                </button>,
            );
            fireEvent.click(getByRole('button'));
            expect(mockOnClick).toHaveBeenCalledTimes(1);
    });


})




