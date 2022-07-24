import { URL_APP } from './constants';

describe('modal', () => {
  it('open modal', () => {
    cy.visit(URL_APP);
    cy.contains('Краторная булка N-200i').click();
  });

  it('close modal - ecs', () => {
    cy.visit(URL_APP);
    cy.contains('Краторная булка N-200i').click();
    cy.wait(1000);
    cy.get('body').type('{esc}');
  });

  it('close modal - body click', () => {
    cy.visit(URL_APP);
    cy.contains('Краторная булка N-200i').click();
    cy.wait(1000);
    cy.get('#modals > div').first().click({ force: true });
  });

  it('close modal - btn click', () => {
    cy.visit(URL_APP);
    cy.contains('Краторная булка N-200i').click();
    cy.wait(1000);
    cy.get('[test-id="modal"] button').first().click();
  });
});
