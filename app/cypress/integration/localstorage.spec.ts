context('Localstorage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#')
    })

    it('Saves links to localstorage', () => {
        cy.intercept('GET', 'api.shrtco.de/v2/shorten').as('callShorten')

        const url = "https://google.com";
        cy.get('#shortenForm input').type(url);
        cy.get('#shortenForm').submit();

        cy.wait('@callShorten').should(() => {
            // check if items have been stored in the localstorage
            expect(localStorage.getItem('links')).not.empty
        })

        // reload page
        cy.window().reload().then(() => {
            // see if items are fetched and rendered
            cy.get("[class^='ShortenedLink_link-card']").find('p').contains(url).should('exist').next('a').should('not.be.empty');
        })
    });
});