describe('Ticketbox', () => {
  beforeEach(() => cy.visit('index.html'));

  it('Checks for the initial state', () => {
    cy.percySnapshot();
  });

  it('Checks for invalid email', () => {
    cy.get('#email').type('joao-exemplo.com')
    cy.percySnapshot();
  })

  it('Enables submission after all mandatory fields are filled', ()=> {
    cy.fillMandatoryFields();
    cy.percySnapshot();
  })

  it('Updates agreement base on full name, tockets quantity, and type', ()=> {
    cy.get('#first-name').type('Ailton');
    cy.get('#last-name').type('Prata');
    cy.get('#ticket-quantity').select('4');
    cy.get('#vip').check();
    cy.percySnapshot();

  })

  const successfulFormSubmission = 'Shows a success message after form submission';
  it(successfulFormSubmission, ()=> {
    cy.fillMandatoryFields();
    cy.contains('Confirm Tickets').click();
    cy.percySnapshot(successfulFormSubmission, {
      percyCSS: '.success span { display: none }'
    });
    

  })


});
