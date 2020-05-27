//-COMPONENT TESTING
import React from "react"; 
import {render} from "@testing-library/react"; 
import Header from "../components/Header/Header"; 
import Register from "../components/Auth/Register"; 
import Login from "../components/Auth/Login"; 
import {Provider} from "react-redux"; 
import store from "../redux/store"; 

//-HEADER
describe("testing for the Header component", () => {

    test("renders out app name", () => {
        const {container} = render(<Header/>); 
        expect(container.textContent).toContain("Wine Oh!")
    })

    test("renders out first part of slogan", () => {
        const {container} = render(<Header/>); 
        expect(container.textContent).toContain("Some call it a problem,")
    })

    test("renders out second part of slogan", () => {
        const {container} = render(<Header/>); 
        expect(container.textContent).toContain("I call it a hobby.")
    })
})

//-REGISTER
describe("testing for the Register component", () => {

    test("renders out a note if user already has an account", () => {
        const {container} = render(
        <Provider store ={store}>
            <Register/>
        </Provider>); 
        expect(container.textContent).toContain("Already a Wine Oh!?")
    })
})

//-LOGIN
describe("testing out Login component", () => {

    test("renders out a note if user does not have an account", () => {
        const {container} = render(
            <Provider store={store}>
                <Login/>
            </Provider>
        ); 
        expect(container.textContent).toContain("Want to become a Wine Oh!?")
    })
})
