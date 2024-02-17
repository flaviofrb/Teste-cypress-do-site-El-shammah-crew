/// <reference types="Cypress"/>


describe('Testes Funcionais do site El-shammah crew', () => {

    it('Automatizar site do El-shammah, verificando o banner', () => {
        // Visite a URL do site
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');

        // Verificar se o banner no primeiro slide está visível
        cy.get('#home > .swiper > .swiper-pagination > [aria-label="Go to slide 1"]');
        cy.get('.swiper-slide-visible > .content > h3').should('be.visible');

        // Avance para o segundo slide
        cy.get('#home > .swiper > .swiper-pagination > [aria-label="Go to slide 2"]').click();

        // Verificar se o banner do segundo slide está visível
        cy.get('.swiper-slide-visible > .content > h3').should('be.visible');

        // Avance novamente para o terceiro slide
        cy.get('#home > .swiper > .swiper-pagination > [aria-label="Go to slide 3"]');

        // Verificar novamente se o banner na terceira slide está visível
        cy.get('.swiper-slide-visible > .content > h3').should('be.visible');
    });

    it('Automatizar site do El-shammah, verificando o menu', () => {
        // Visite a URL do site
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');

        // Clique nos links do menu e verifique se os elementos associados estão visíveis
        cy.get('.navbar > [href="#home"]').click();
        cy.get('.swiper-slide-visible > .content > h3').should('be.visible');
        
        cy.get('.navbar > [href="#sobre"]').click();
        cy.get('#sobre > .image > img').should('be.visible');
        cy.get('.title').should('be.visible');
        
        cy.get('#btnVerMais').click();
        cy.get('.navbar > [href="#serviços"]').click();
        cy.get('#serviços > .heading > span').should('be.visible');
        
        cy.get('.navbar > [href="#integrantes"]').click();
        cy.get('#integrantes > .heading > span').should('be.visible');
        
        cy.get('.navbar > [href="#momentos"]').click();
        cy.get('#momentos > .heading > span').should('be.visible');
        
        // Clicar em um link para um documento PDF do portifólio do El-shammah
        cy.get('.navbar > [href="GRUPO EL-SHAMMAH CREW CERTO.pdf"]').click();
    });

    it('Automatizar site do El-shammah, verificando os integrantes', () => {
        // Visite a URL do site
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');
        
        // Clicar no link para os integrantes e verificar se eles estão visíveis em cada slide
        cy.get('.navbar > [href="#integrantes"]').click();
        cy.contains('B.boy Sidarta').should('be.visible').scrollIntoView();
        cy.contains('B.boy Iron').should('be.visible').scrollIntoView();
        cy.contains('B.boy King').should('be.visible').scrollIntoView();    
        
        cy.get('#integrantes > .swiper > .swiper-pagination > [aria-label="Go to slide 4"]').click();
        cy.contains('B.girl Emilly').should('be.visible').scrollIntoView();
        cy.contains('B.boy Osmar').should('be.visible').scrollIntoView();
        cy.contains('B.boy Jeff').should('be.visible').scrollIntoView();
        
        cy.get('#integrantes > .swiper > .swiper-pagination > [aria-label="Go to slide 7"]').click();
        cy.contains('B.boy Macorrone').should('be.visible').scrollIntoView();
    });

    it.only('Automatizar site do El-shammah, verificando os momentos', () => {
        // Visite a URL do site
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');
        
        // Clicar no link para os momentos e verificar se cada momento está visível em cada slide
        cy.get('.navbar > [href="#momentos"]').click();
        cy.contains('BATIZADO RAIZES DO BRASIL - REDE GLOBO').should('be.visible').scrollIntoView();
        cy.contains('31 DE DEZEMBRO DE 2010').should('be.visible').scrollIntoView();
        cy.contains('Marcados pelo fogo').should('be.visible').scrollIntoView();
        cy.contains('01 DE NOVEMBRO DE 2012').should('be.visible').scrollIntoView();
        cy.contains('Dancing for Jesus').should('be.visible').scrollIntoView();
        cy.contains('03 de outubro de 2014').should('be.visible').scrollIntoView();
        cy.get('#momentos > .swiper > .swiper-pagination > [aria-label="Go to slide 4"]').click();
        cy.contains('Apresentação IEQ Macapaba').should('be.visible').scrollIntoView();
        cy.contains('25 DE JANEIRO DE 2015').should('be.visible').scrollIntoView();
        cy.contains('Apresentação Macapá Shopping').should('be.visible').scrollIntoView();
        cy.contains('13 DE MARÇO DE 2015').should('be.visible').scrollIntoView();
        cy.contains('Festival Amazônico').should('be.visible').scrollIntoView();
        cy.contains('17 DE MAIO DE 2016').should('be.visible').scrollIntoView();
        
    });

    it('Automatizar site do El-shammah, verificando as redes sociais do rodapé', () => {
        // Visite a URL do site
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');
        
        // Clique nos ícones das redes sociais no rodapé
        cy.get('[href="https://api.whatsapp.com/send?phone=559699631822"] > .bx').click();
        cy.get('[href="https://www.facebook.com/profile.php?id=100069864276294"] > .bx').click();
        cy.get('[href="https://www.instagram.com/el_shammah_crew/"] > .bx').click();
        cy.get('[href="https://www.youtube.com/channel/UCwpr0QUUEszD6B8CUXTKPoQ"] > .bx').click();
        
        // Clicar em um link para um documento PDF do portifólio do El-shammah
        cy.get('[href="GRUPO EL-SHAMMAH CREW CERTO.pdf"] > .bx').click();
    });
});
