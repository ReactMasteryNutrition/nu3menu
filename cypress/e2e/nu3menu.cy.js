/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'

it('classic user path', () => {
    const user = {
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.internet.userName()
    }
    // register 
    cy.visit('/')
    cy.findByRole('link', { name: "Sign up" }).click()
    cy.url().should('include', '/register')
    cy.findByRole('dialog').within(() => {
        cy.findByPlaceholderText("Email address").type(user.email)
        cy.findByPlaceholderText("Password").then(($el) => {
            Cypress.dom.isAttached($el)
        }).type(user.password)
        cy.findByRole('button', { name: "Sign up" }).then(($el) => {
            Cypress.dom.isAttached($el)
        }).click()
    })
    cy.url().should('eq', "http://localhost:3000/")
    // update name
    cy.findByLabelText("dropdown").click()
    cy.findByRole("link", { name: "My account" }).click()
    cy.url().should('include', "/myaccount")
    cy.findByRole("button", { name: "name" }).click()
    cy.findByRole("textbox", { name: "new name" }).type(user.name)
    cy.findByRole("button", { name: "Confirm" }).then(($el) => {
        Cypress.dom.isAttached($el)
    }).click()
    cy.findByText("Your name has been modified !")
    cy.findByRole("button", { name: "Close" }).click()
    // log out
    cy.findByLabelText("dropdown").click()
    cy.findByRole("link", { name: "Log out" }).click()
    cy.url().should('eq', "http://localhost:3000/")
    // login
    cy.findByRole('link', { name: "Log in" }).click()
    cy.url().should('include', '/login')
    cy.findByRole('dialog').within(() => {
        cy.findByPlaceholderText("Email address").type(user.email)
        cy.findByPlaceholderText("Password").then(($el) => {
            Cypress.dom.isAttached($el)
        }).type(user.password)
        cy.findByRole('button', { name: "Log in" }).then(($el) => {
            Cypress.dom.isAttached($el)
        }).click()
    })
    cy.url().should('eq', "http://localhost:3000/")
    // unsubscribe
    cy.findByLabelText("dropdown").click()
    cy.findByRole("link", { name: "My account" }).click()
    cy.url().should('include', "/myaccount")
    cy.findByRole('button', { name: "Delete my account" }).click()
    cy.findByLabelText("delete").type(user.password)
    cy.findByRole("button", { name: "Confirm" }).then(($el) => {
        Cypress.dom.isAttached($el)
    }).click()
    cy.url().should('eq', "http://localhost:3000/")
    cy.findByText("Your account has been deleted !")
})
