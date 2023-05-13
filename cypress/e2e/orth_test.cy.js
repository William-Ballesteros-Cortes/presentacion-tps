describe('Prueba de arreglo ortogonal con select', () => {
  it('Selecciona opciones de arreglos ortogonales', () => {
    cy.visit('http://localhost:3000/') // Reemplazar con la URL de la página que se quiere probar

    //PRUEBA 1
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('White')
    cy.get(':nth-child(3) > select').select('65 or older')
    cy.get(':nth-child(5) > select').select('Other')
    cy.get(':nth-child(7) > select').select('3 or more')
    cy.get('button').click()

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'White')
    cy.get(':nth-child(3) > select').should('have.value', '65 or older')
    cy.get(':nth-child(5) > select').should('have.value', 'Other')
    cy.get(':nth-child(7) > select').should('have.value', '3 or more')
    cy.get('p').should('have.text', 'This person is White, in the age range of 65 or older, is Other, and has 3 or more children.')


    //PRUEBA 2
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Asian')
    cy.get(':nth-child(3) > select').select('55-64')
    cy.get(':nth-child(5) > select').select('Female')
    cy.get(':nth-child(7) > select').select('2')
    cy.get('button').click()

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Asian')
    cy.get(':nth-child(3) > select').should('have.value', '55-64')
    cy.get(':nth-child(5) > select').should('have.value', 'Female')
    cy.get(':nth-child(7) > select').should('have.value', '2')
    cy.get('button').click()
    cy.get('p').should('have.text', 'This person is Asian, in the age range of 55-64, is Female, and has 2 children.')

    //PRUEBA 3
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Asian')
    cy.get(':nth-child(3) > select').select('65 or older')
    cy.get(':nth-child(5) > select').select('Other')
    cy.get(':nth-child(7) > select').select('3 or more')
    cy.get('button').click()

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Asian')
    cy.get(':nth-child(3) > select').should('have.value', '65 or older')
    cy.get(':nth-child(5) > select').should('have.value', 'Other')
    cy.get(':nth-child(7) > select').should('have.value', '3 or more')
    cy.get('p').should('have.text', 'This person is Asian, in the age range of 65 or older, is Other, and has 3 or more children.')

    //PRUEBA 4
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Black')
    cy.get(':nth-child(3) > select').select('45-54')
    cy.get(':nth-child(5) > select').select('Male')
    cy.get(':nth-child(7) > select').select('1')
    cy.get('button').click()

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Black')
    cy.get(':nth-child(3) > select').should('have.value', '45-54')
    cy.get(':nth-child(5) > select').should('have.value', 'Male')
    cy.get(':nth-child(7) > select').should('have.value', '1')
    cy.get('p').should('have.text', 'This person is Black, in the age range of 45-54, is Male, and has 1 children.')


    //PRUEBA 5
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Black')
    cy.get(':nth-child(3) > select').select('55-64')
    cy.get(':nth-child(5) > select').select('Female')
    cy.get(':nth-child(7) > select').select('2')
    cy.get('button').click()

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Black')
    cy.get(':nth-child(3) > select').should('have.value', '55-64')
    cy.get(':nth-child(5) > select').should('have.value', 'Female')
    cy.get(':nth-child(7) > select').should('have.value', '2')
    cy.get('p').should('have.text', 'This person is Black, in the age range of 55-64, is Female, and has 2 children.')


    //PRUEBA 6
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Black')
    cy.get(':nth-child(3) > select').select('65 or older')
    cy.get(':nth-child(5) > select').select('Other')
    cy.get(':nth-child(7) > select').select('3 or more')
    cy.get('button').click()

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Black')
    cy.get(':nth-child(3) > select').should('have.value', '65 or older')
    cy.get(':nth-child(5) > select').should('have.value', 'Other')
    cy.get(':nth-child(7) > select').should('have.value', '3 or more')
    cy.get('p').should('have.text', 'This person is Black, in the age range of 65 or older, is Other, and has 3 or more children.')


    //PRUEBA 7
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('White')
    cy.get(':nth-child(3) > select').select('45-54')
    cy.get(':nth-child(5) > select').select('Male')
    cy.get(':nth-child(7) > select').select('1')
    cy.get('button').click()

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'White')
    cy.get(':nth-child(3) > select').should('have.value', '45-54')
    cy.get(':nth-child(5) > select').should('have.value', 'Male')
    cy.get(':nth-child(7) > select').should('have.value', '1')
    cy.get('p').should('have.text', 'This person is White, in the age range of 45-54, is Male, and has 1 children.')


    //PRUEBA 8
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('White')
    cy.get(':nth-child(3) > select').select('55-64')
    cy.get(':nth-child(5) > select').select('Female')
    cy.get(':nth-child(7) > select').select('2')
    cy.get('button').click()

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'White')
    cy.get(':nth-child(3) > select').should('have.value', '55-64')
    cy.get(':nth-child(5) > select').should('have.value', 'Female')
    cy.get(':nth-child(7) > select').should('have.value', '2')
    cy.get('p').should('have.text', 'This person is White, in the age range of 55-64, is Female, and has 2 children.')


    //PRUEBA 9
    // Encontrar y seleccionar el primer select
    cy.get(':nth-child(1) > select').select('Asian')
    cy.get(':nth-child(3) > select').select('45-54')
    cy.get(':nth-child(5) > select').select('Male')
    cy.get(':nth-child(7) > select').select('1')
    cy.get('button').click()

    // Verificar que los valores seleccionados son los correctos
    cy.get(':nth-child(1) > select').should('have.value', 'Asian')
    cy.get(':nth-child(3) > select').should('have.value', '45-54')
    cy.get(':nth-child(5) > select').should('have.value', 'Male')
    cy.get(':nth-child(7) > select').should('have.value', '1')
    cy.get('button').click()
    cy.get('p').should('have.text', 'This person is Asian, in the age range of 45-54, is Male, and has 1 children.')

  })
})