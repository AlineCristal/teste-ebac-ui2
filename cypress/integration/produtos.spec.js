/// <reference types="cypress"/>

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista ', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Atlas Fitness Tank')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10
        cy.get('[class="product-block grid"]')
        .contains('Argus All-Weather Tank').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho')
    });


    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Argus All-Weather Tank','M', 'Gray', 1)

    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt','S', 'Purple', 3)

    });
});


