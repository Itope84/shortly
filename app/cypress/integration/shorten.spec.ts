import * as Color from 'color'

const errorColor = Color('#f46262').toString()

// TODO: this should probably be a unit test
context('Shorten', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#')
  })

  it('validates the form with invalid input', () => {
    cy.get('#shortenForm').submit()
    cy.get('#shortenForm input')
      .next()
      .contains('Please add a link')
      .should('have.css', 'color', errorColor)
  })

    it('types and sets value on input', () => {
      const url = "https://google.com";
        cy.get('#shortenForm input').type(url).should('have.value', url)
    })

  it('shows a loading indicator when submitting the form', () => {
    const url = "https://google.com";
    cy.get('#shortenForm input').type(url)

    cy.get('#shortenForm').submit().find('button').find('svg')
    })

  it('submits form and fetches shortened url', () => {
    cy.intercept('GET', 'api.shrtco.de/v2/shorten').as('callShorten')

    const url = "https://google.com";

    cy.get('#shortenForm input').type(url);
    cy.get('#shortenForm').submit();

    cy.wait('@callShorten').should(({ request, response }) => {
      expect(request.url).to.match(/\?url=https:\/\/google.com/)
      expect(response && response.body).to.have.property('result')
      expect(response.body.result).to.have.property('full_short_link')
    })
  })
});
