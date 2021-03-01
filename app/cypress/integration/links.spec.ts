context('Shortened links', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#')
    })

    it('Add shortened links to the dom', () => {
        cy.intercept('GET', 'api.shrtco.de/v2/shorten').as('callShorten')

        const url = "https://google.com";
        cy.get('#shortenForm input').type(url);
        cy.get('#shortenForm').submit();

        cy.wait('@callShorten').should(() => {
            cy.get("[class^='ShortenedLink_link-card']").find('p').contains(url).should('exist').next('a').should('not.be.empty');
        })
    });

    it('Copies text to the clipboard', () => {
        cy.intercept('GET', 'api.shrtco.de/v2/shorten').as('callShorten')

        const url = "https://google.com";
        cy.get('#shortenForm input').type(url);
        cy.get('#shortenForm').submit();

        cy.wait('@callShorten').should(({ response }) => {
            cy.get("[class^='ShortenedLink_link-card']").find('button').click();

            cy.window().then((win) => {
                win.navigator.clipboard.readText().then((text) => {
                    expect(
                        text).to.equal(response.body.result.full_short_link);
                });
            });
        })
    });
});