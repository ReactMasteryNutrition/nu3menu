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
    cy.findByRole('link', { name: "S'inscrire" }).click()
    cy.url().should('include', '/register')
    cy.findByRole('dialog').within(() => {
        cy.findByPlaceholderText("E-mail").type(user.email)
        cy.findByPlaceholderText("Mot de passe").then(($el) => {
            Cypress.dom.isAttached($el)
        }).type(user.password)
        cy.findByRole('button', { name: "S'inscrire" }).then(($el) => {
            Cypress.dom.isAttached($el)
        }).click()
    })
    cy.url().should('eq', "http://localhost:3000/")
    // update name
    cy.findByLabelText("dropdown").click()
    cy.findByRole("link", { name: "Mon compte" }).click()
    cy.url().should('include', "/myaccount")
    cy.findByRole("button", { name: "name" }).click()
    cy.findByRole("textbox", { name: "new name" }).type(user.name)
    cy.findByRole("button", { name: "Valider" }).then(($el) => {
        Cypress.dom.isAttached($el)
    }).click()
    cy.findByText("Votre prénom a bien été modifié !")
    cy.findByRole("button", { name: "Close" }).click()
    // log out
    cy.findByLabelText("dropdown").click()
    cy.findByRole("link", { name: "Se déconnecter" }).click()
    cy.url().should('eq', "http://localhost:3000/")
    // login
    cy.findByRole('link', { name: "Se connecter" }).click()
    cy.url().should('include', '/login')
    cy.findByRole('dialog').within(() => {
        cy.findByPlaceholderText("E-mail").type(user.email)
        cy.findByPlaceholderText("Mot de passe").then(($el) => {
            Cypress.dom.isAttached($el)
        }).type(user.password)
        cy.findByRole('button', { name: "Se connecter" }).then(($el) => {
            Cypress.dom.isAttached($el)
        }).click()
    })
    cy.url().should('eq', "http://localhost:3000/")
    // unsubscribe
    cy.findByLabelText("dropdown").click()
    cy.findByRole("link", { name: "Mon compte" }).click()
    cy.url().should('include', "/myaccount")
    cy.findByRole('button', { name: "Supprimer mon compte" }).click()
    cy.findByLabelText("delete").type(user.password)
    cy.findByRole("button", { name: "Valider" }).then(($el) => {
        Cypress.dom.isAttached($el)
    }).click()
    cy.url().should('eq', "http://localhost:3000/")
    cy.findByText("Votre compte a bien été supprimé !")
})
