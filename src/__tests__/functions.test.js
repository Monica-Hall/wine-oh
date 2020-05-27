//-UNIT TESTING 
import {toggleLogin, toggleRedirect, handleChange} from "../utils/Functions"

test("toggle login should change to false", () => {
    let display = true 
     expect(toggleLogin(display)).toBe(false)
})

test("toggle login should not be true", () => {
    let display = true
    expect(toggleLogin(display)).not.toBe(true)
})

test("toggle redirect should change to false", () => {
    let redirect = true
    expect(toggleRedirect(redirect)).toBe(false)
})

test("toggle redirect should not be true", () => {
    let redirect = true
    expect(toggleRedirect(redirect)).not.toBe(true)
})

test("handle change should make name to equal value", () => {
    let name = ""
    let value = ""
    expect(handleChange(name, value)).toBe(name = value)
})