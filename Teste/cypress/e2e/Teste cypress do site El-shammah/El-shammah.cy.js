/// <reference types="Cypress"/>


describe('Testes Funcional do site El-shammah crew', () => {

    it('Automatizar site do El-shammah, verificando banne', () => {
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');
        cy.get('#home > .swiper > .swiper-pagination > [aria-label="Go to slide 1"]')
        cy.get('.swiper-slide-visible > .content > h3').should('be.visible');
        cy.get('#home > .swiper > .swiper-pagination > [aria-label="Go to slide 3"]').click();
        cy.get('.swiper-slide-visible > .content > h3').should('be.visible');
        cy.get('#home > .swiper > .swiper-pagination > [aria-label="Go to slide 3"]');
        cy.get('.swiper-slide-visible > .content > h3').should('be.visible');

    });

    it('Automatizar site do El-shammah, verificando O menu', () => {
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');
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
        cy.get('.navbar > [href="GRUPO EL-SHAMMAH CREW CERTO.pdf"]').click();

    });

    it('Automatizar site do El-shammah, verificando os integrantes', () => {
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');
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
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');
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
        cy.get('#momentos > .swiper > .swiper-pagination > [aria-label="Go to slide 7"]').click();
        cy.contains('Cypher Floriano').should('be.visible').scrollIntoView();
        cy.contains('06 DE OUTUBRO DE 2021').should('be.visible').scrollIntoView();
        cy.contains('Projeto de incentivo cultural - Produção CIA North filmes').should('be.visible').scrollIntoView();
        cy.contains('02 DE DEZEMBRO DE 2021').should('be.visible').scrollIntoView();
        cy.contains('Projeto diversidade cultural 2021').should('be.visible').scrollIntoView();
        cy.contains('22 DE DEZEMBRO DE 2021').should('be.visible').scrollIntoView();
        cy.get('#momentos > .swiper > .swiper-pagination > [aria-label="Go to slide 10"]').click();
        cy.contains('Circuito periferia 2022').should('be.visible').scrollIntoView();
        cy.contains('22 DE JANEIRO DE 2022').should('be.visible').scrollIntoView();
        cy.contains('Freestyle Macapá').should('be.visible').scrollIntoView();
        cy.contains('14 DE FEVEREIRO DE 2022').should('be.visible').scrollIntoView();
        cy.contains('Batalha spike breaking').should('be.visible').scrollIntoView();
        cy.contains('08 E 09 DE ABRIL DE 2022').should('be.visible').scrollIntoView();
        cy.get('[aria-label="Go to slide 13"]').click();
        cy.contains('Potoca podcast').should('be.visible').scrollIntoView();
        cy.contains('22 DE ABRIL DE 2022').should('be.visible').scrollIntoView();
        cy.contains('Amapanime 2021').should('be.visible').scrollIntoView();
        cy.contains('01 DE MAIO DE 2022').should('be.visible').scrollIntoView();
        cy.contains('Batalha baneficente 2022').should('be.visible').scrollIntoView();
        cy.contains('07 DE MAIO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[aria-label="Go to slide 16"]').click();
        cy.contains('MOSTRA 100% DANÇA - SHOPPING GARDEN').should('be.visible').scrollIntoView();
        cy.contains('15 DE MAIO DE 2022').should('be.visible').scrollIntoView();
        cy.contains('Feira cultural em Mazagão').should('be.visible').scrollIntoView();
        cy.contains('15 DE MAIO DE 2022').should('be.visible').scrollIntoView();
        cy.contains('Batalha evolução das ruas').should('be.visible').scrollIntoView();
        cy.contains('05 DE JULHO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[aria-label="Go to slide 19"]').click();
        cy.contains('Batalha marabaixo 2022').should('be.visible').scrollIntoView();
        cy.contains('21 DE AGOSTO DE 2022').should('be.visible').scrollIntoView();
        cy.contains('Parada preta 2022').should('be.visible').scrollIntoView();
        cy.contains('16 DE SETEMBRO DE 2022').should('be.visible').scrollIntoView();
        cy.contains('Batalha CBC 2022').should('be.visible').scrollIntoView();
        cy.contains('18 DE SETEMBRO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[aria-label="Go to slide 22"]').click();
        cy.contains('3° edição Evolução das ruas 2022').should('be.visible').scrollIntoView();
        cy.contains('21 DE NOVEMBRO DE 2022').should('be.visible').scrollIntoView();
        cy.contains('1° vestival de hip hop Macapá').should('be.visible').scrollIntoView();
        cy.contains('25 DE MARÇO DE 2023').should('be.visible').scrollIntoView();
    
    });
    

    it('Automatizar site do El-shammah, verificando as redes socias do rodapé', () => {
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');
        cy.get('[href="https://api.whatsapp.com/send?phone=559699631822"] > .bx').click();
        cy.get('[href="https://www.facebook.com/profile.php?id=100069864276294"] > .bx').click();
        cy.get('[href="https://www.instagram.com/el_shammah_crew/"] > .bx').click();
        cy.get('[href="https://www.youtube.com/channel/UCwpr0QUUEszD6B8CUXTKPoQ"] > .bx').click();
        cy.get('[href="GRUPO EL-SHAMMAH CREW CERTO.pdf"] > .bx').click();

    });



});

