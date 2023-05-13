describe('Prueba de arreglo ortogonal con select', () => {
  it('Selecciona opciones de arreglos ortogonales', () => {
    cy.visit('http://localhost:3000/') // Reemplazar con la URL de la página que se quiere probar

    //PRUEBA 1
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Asian')
    cy.get(':nth-child(3) > select').select('45-54')
    cy.get(':nth-child(5) > select').select('Male')
    cy.get(':nth-child(7) > select').select('1')

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Asian')
    cy.get(':nth-child(3) > select').should('have.value', '45-54')
    cy.get(':nth-child(5) > select').should('have.value', 'Male')
    cy.get(':nth-child(7) > select').should('have.value', '1')

    //PRUEBA 2
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Asian')
    cy.get(':nth-child(3) > select').select('55-64')
    cy.get(':nth-child(5) > select').select('Female')
    cy.get(':nth-child(7) > select').select('2')

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Asian')
    cy.get(':nth-child(3) > select').should('have.value', '55-64')
    cy.get(':nth-child(5) > select').should('have.value', 'Female')
    cy.get(':nth-child(7) > select').should('have.value', '2')

    //PRUEBA 3
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Asian')
    cy.get(':nth-child(3) > select').select('65 or older')
    cy.get(':nth-child(5) > select').select('Other')
    cy.get(':nth-child(7) > select').select('3 or more')

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Asian')
    cy.get(':nth-child(3) > select').should('have.value', '65 or older')
    cy.get(':nth-child(5) > select').should('have.value', 'Other')
    cy.get(':nth-child(7) > select').should('have.value', '3 or more')

    //PRUEBA 4
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Black')
    cy.get(':nth-child(3) > select').select('45-54')
    cy.get(':nth-child(5) > select').select('Male')
    cy.get(':nth-child(7) > select').select('1')

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Black')
    cy.get(':nth-child(3) > select').should('have.value', '45-54')
    cy.get(':nth-child(5) > select').should('have.value', 'Male')
    cy.get(':nth-child(7) > select').should('have.value', '1')

    //PRUEBA 5
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Black')
    cy.get(':nth-child(3) > select').select('55-64')
    cy.get(':nth-child(5) > select').select('Female')
    cy.get(':nth-child(7) > select').select('2')

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Black')
    cy.get(':nth-child(3) > select').should('have.value', '55-64')
    cy.get(':nth-child(5) > select').should('have.value', 'Female')
    cy.get(':nth-child(7) > select').should('have.value', '2')

    //PRUEBA 6
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Black')
    cy.get(':nth-child(3) > select').select('65 or older')
    cy.get(':nth-child(5) > select').select('Other')
    cy.get(':nth-child(7) > select').select('3 or more')

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Black')
    cy.get(':nth-child(3) > select').should('have.value', '65 or older')
    cy.get(':nth-child(5) > select').should('have.value', 'Other')
    cy.get(':nth-child(7) > select').should('have.value', '3 or more')

    //PRUEBA 7
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('White')
    cy.get(':nth-child(3) > select').select('45-54')
    cy.get(':nth-child(5) > select').select('Male')
    cy.get(':nth-child(7) > select').select('1')

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'White')
    cy.get(':nth-child(3) > select').should('have.value', '45-54')
    cy.get(':nth-child(5) > select').should('have.value', 'Male')
    cy.get(':nth-child(7) > select').should('have.value', '1')

    //PRUEBA 8
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('White')
    cy.get(':nth-child(3) > select').select('55-64')
    cy.get(':nth-child(5) > select').select('Female')
    cy.get(':nth-child(7) > select').select('2')

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'White')
    cy.get(':nth-child(3) > select').should('have.value', '55-64')
    cy.get(':nth-child(5) > select').should('have.value', 'Female')
    cy.get(':nth-child(7) > select').should('have.value', '2')

    //PRUEBA 9
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('White')
    cy.get(':nth-child(3) > select').select('65 or older')
    cy.get(':nth-child(5) > select').select('Other')
    cy.get(':nth-child(7) > select').select('3 or more')

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'White')
    cy.get(':nth-child(3) > select').should('have.value', '65 or older')
    cy.get(':nth-child(5) > select').should('have.value', 'Other')
    cy.get(':nth-child(7) > select').should('have.value', '3 or more')

  })
})