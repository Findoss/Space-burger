import { URL_APP } from './constants';

describe('Burger constructor drag ingredient', () => {
  it('build burger', () => {
    cy.visit(URL_APP);

    cy.contains('Краторная булка N-200i').drag(
      '[test-id="burger-constructor"]',
    );

    cy.contains('Мясо бессмертных моллюсков Protostomia').drag(
      '[test-id="burger-constructor"]',
    );

    cy.get('[test-id="sum-order"]').should('include.text', '3847');
  });
});
