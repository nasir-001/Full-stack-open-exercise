describe('Blog app', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000')
    })

    it('Login Form is shown', function() {
        cy.contains('Log in to application')
        cy.contains('login')
    })
    
    describe('Login credentials', function() {
        it('succeeds with the correct credentials', function() {
            cy.get('#username').type('root')
            cy.get('#password').type('sekret')
            cy.contains('login').click()
            cy.contains('root logged in.')
        })

        it('fails with wrong credentials', function() {
            cy.get('#username').type('root')
            cy.get('#password').type('wrongPassword')
            cy.contains('login').click()
            cy.contains('Something went wrong')
        })

        it('A user can logout', function() {
            cy.get('#username').type('root')
            cy.get('#password').type('sekret')
            cy.contains('login').click()
            cy.contains('root logged in.')
            cy.contains('Logout').click()
            cy.contains('root has been logged out')
        })
    })

    describe('When logged in', function() {
        beforeEach(function() {
            cy.visit('http://localhost:3000')
        })

        it('A blog can be created', function() {
            cy.get('#username').type('root')
            cy.get('#password').type('sekret')
            cy.contains('login').click()
            cy.contains('New Blog').click()
            cy.get('#title').type('This blog is created from cypress')
            cy.get('#author').type('John Martinez')
            cy.get('#url').type('www.google.com')
            cy.contains('Submit').click()
            cy.contains('A new blog "This blog is created from cypress" by "John Martinez" has been added ')
        })

        it('A blog can also be liked from cypress', function() {
            cy.get('#username').type('root')
            cy.get('#password').type('sekret')
            cy.contains('login').click()
            cy.contains('View').click()
            cy.contains('Like').click()
        })

        it('A blog can be deleted from cypress as well', function() {
            cy.get('#username').type('root')
            cy.get('#password').type('sekret')
            cy.contains('login').click()
            cy.contains('View').click()
            cy.contains('Delete').click()
            cy.contains('Something went wrong')
        })

    })

})