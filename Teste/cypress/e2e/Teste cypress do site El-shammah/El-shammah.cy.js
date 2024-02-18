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

    it('Automatizar site do El-shammah, verificando os momentos', () => {
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

    it('Automatizar site do El-shammah, verificando os  target="_blank" dos botões contato', () => {
        // Visite a URL do site
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');

        // Verificando os botões do banne de contato
        cy.get('.swiper-slide-visible > .content > .btn').should('be.visible');
        cy.get('.swiper-slide-visible > .content > .btn').click();
        cy.get('#home > .swiper > .swiper-pagination > [aria-label="Go to slide 2"]').click();
        cy.get('.swiper-slide-visible > .content > .btn').should('be.visible');
        cy.get('.swiper-slide-visible > .content > .btn').click();
        cy.get('#home > .swiper > .swiper-pagination > [aria-label="Go to slide 3"]').click();
        cy.get('.swiper-slide-visible > .content > .btn').should('be.visible');
        cy.get('.swiper-slide-visible > .content > .btn').click();

        // Verificando o botão de contato de sobre 
        cy.get('#sobre > .content > .btn').should('be.visible');
        cy.get('#sobre > .content > .btn').click();

        // Verificando o botão de contato do segundo banne
        cy.contains('Contato').should('be.visible');
        cy.get('.banner > .btn').click();

    });

    it('Automatizar site do El-shammah, verificando as redes socias com  target="_blank" dos integrantes do grupo', () => {
        // Visite a URL do site
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');

        // Visitar se está acontecendo o target="_blank" dos integrantes

        cy.get('.navbar > [href="#integrantes"]').click();
        cy.contains('B.boy Sidarta').should('be.visible').scrollIntoView();
        cy.get('.swiper-slide-active > .redes > [href="https://www.facebook.com/sidartaap"] > .bx').click();
        cy.get('.swiper-slide-active > .redes > [href="https://www.instagram.com/sidarta_elshammah/"] > .bx').click();

        cy.contains('B.boy Iron').should('be.visible').scrollIntoView();
        cy.get('.swiper-slide-next > .redes > [href="https://www.facebook.com/ffrankilin/"] > .bx').click();
        cy.get('.swiper-slide-next > .redes > [href="https://www.instagram.com/flavio_frank98/"] > .bx').click();

        cy.contains('B.boy King').should('be.visible').scrollIntoView();
        cy.get(':nth-child(6) > .redes > [href="https://www.facebook.com/moose.tatuador"] > .bx').click();
        cy.get(':nth-child(6) > .redes > [href="https://www.instagram.com/096_king/"] > .bx').click();


        cy.get('#integrantes > .swiper > .swiper-pagination > [aria-label="Go to slide 4"]').click();

        cy.contains('B.girl Emilly').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/profile.php?id=100008506058576"] > .bx').click();
        cy.get('[href="https://www.instagram.com/emilly_elshammah/"] > .bx').click();

        cy.contains('B.boy Osmar').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/profile.php?id=100055328232795"] > .bx').click();
        cy.get('[href="https://www.instagram.com/trindade_elshammah/"] > .bx').click();

        cy.contains('B.boy Jeff').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/profile.php?id=100004818467980"] > .bx').click();
        cy.get('[href="https://www.instagram.com/b.boy_jeff/"] > .bx').click();

        cy.get('#integrantes > .swiper > .swiper-pagination > [aria-label="Go to slide 7"]').click();

        cy.contains('B.boy Macorrone').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/Marley21Jr"] > .bx').click();
        cy.get('[href="https://www.instagram.com/marley21jr/"] > .bx').click();
    });


    it('Automatizar site do El-shammah, verificando as redes socias com  target="_blank" dos momentos do grupo', () => {
        // Visite a URL do site
        cy.visit('https://flaviofrb.github.io/El-Shammah-crew/');

        // Clicar nos links dos momentos e verificar se está acontecendo o target="_blank"
        cy.get('.navbar > [href="#momentos"]').click();

        cy.contains('BATIZADO RAIZES DO BRASIL - REDE GLOBO').should('be.visible').scrollIntoView();
        cy.contains('31 DE DEZEMBRO DE 2010').should('be.visible').scrollIntoView();
        cy.get('.swiper-slide-active > .content > h3 > .localizaçao').click();

        cy.contains('Marcados pelo fogo').should('be.visible').scrollIntoView();
        cy.contains('01 DE NOVEMBRO DE 2012').should('be.visible').scrollIntoView();
        cy.get('.swiper-slide-next > .content > h3 > .localizaçao').click();

        cy.contains('Dancing for Jesus').should('be.visible').scrollIntoView();
        cy.contains('03 de outubro de 2014').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.instagram.com/p/CV-8VCnlfxQ/?utm_source=ig_web_copy_link&igsh=NTYzOWQzNmJjMA=="]').click({ multiple: true });

        cy.get('#momentos > .swiper > .swiper-pagination > [aria-label="Go to slide 4"]').click();

        cy.contains('Apresentação IEQ Macapaba').should('be.visible').scrollIntoView();
        cy.contains('25 DE JANEIRO DE 2015').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.instagram.com/p/CWJiyjmA-pw/?utm_source=ig_web_copy_link&igsh=NTYzOWQzNmJjMA=="]').click({ multiple: true });

        cy.contains('Apresentação Macapá Shopping').should('be.visible').scrollIntoView();
        cy.contains('13 DE MARÇO DE 2015').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/elshammahbboys/photos/pb.100052521344660.-2207520000/1387194888264897/?type=3"]').click({ multiple: true });


        cy.contains('Festival Amazônico').should('be.visible').scrollIntoView();
        cy.contains('17 DE MAIO DE 2016').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.instagram.com/p/BFhIoiss3Ts/?utm_source=ig_web_copy_link&igsh=NTYzOWQzNmJjMA=="]').click({ multiple: true });

        cy.get('#momentos > .swiper > .swiper-pagination > [aria-label="Go to slide 7"]').click();

        cy.contains('Cypher Floriano').should('be.visible').scrollIntoView();
        cy.contains('06 DE OUTUBRO DE 2021').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.instagram.com/tv/CTr9EZtl7za/?utm_source=ig_web_copy_link&igsh=NTYzOWQzNmJjMA=="]').click({ multiple: true });

        cy.contains('Projeto de incentivo cultural - Produção CIA North filmes').should('be.visible').scrollIntoView();
        cy.contains('02 DE DEZEMBRO DE 2021').should('be.visible').scrollIntoView();
        cy.get('[href="https://youtu.be/UolduX8T44Y?si=s36BiLrKRK4_QmQP"]').click({ multiple: true });

        cy.contains('Projeto diversidade cultural 2021').should('be.visible').scrollIntoView();
        cy.contains('22 DE DEZEMBRO DE 2021').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/100069864276294/videos/339995557583642/"]').click({ multiple: true });

        cy.get('#momentos > .swiper > .swiper-pagination > [aria-label="Go to slide 10"]').click();

        cy.contains('Circuito periferia 2022').should('be.visible').scrollIntoView();
        cy.contains('22 DE JANEIRO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://fb.watch/pH7JgqdKwR/"]').click({ multiple: true });

        cy.contains('Freestyle Macapá').should('be.visible').scrollIntoView();
        cy.contains('14 DE FEVEREIRO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/permalink.php?story_fbid=pfbid06hsU3hZjAqPTq4DgXzJGQqReCtqwUUREnxtx8VjRPZh94TxhvHFepmQzoxEe6grhl&id=100392285293394"]').click({ multiple: true });

        cy.contains('Batalha spike breaking').should('be.visible').scrollIntoView();
        cy.contains('08 E 09 DE ABRIL DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://fb.watch/pH8ro3nLaH/"]').click({ multiple: true });

        cy.get('[aria-label="Go to slide 13"]').click();

        cy.contains('Potoca podcast').should('be.visible').scrollIntoView();
        cy.contains('22 DE ABRIL DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.youtube.com/live/UOHEDaJ0K1Y?si=3h9nrFfNO7Pv7dNY"]').click({ multiple: true });

        cy.contains('Amapanime 2021').should('be.visible').scrollIntoView();
        cy.contains('01 DE MAIO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://fb.watch/pH979zpoIa/"]').click({ multiple: true });

        cy.contains('Batalha baneficente 2022').should('be.visible').scrollIntoView();
        cy.contains('07 DE MAIO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://fb.watch/pH9m4gHFD0/"]').click({ multiple: true });

        cy.get('[aria-label="Go to slide 16"]').click();

        cy.contains('MOSTRA 100% DANÇA - SHOPPING GARDEN').should('be.visible').scrollIntoView();
        cy.contains('15 DE MAIO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://fb.watch/pH6Bmgshcg/"]').click({ multiple: true });

        cy.contains('Feira cultural em Mazagão').should('be.visible').scrollIntoView();
        cy.contains('15 DE MAIO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/permalink.php?story_fbid=pfbid0rismJheHWPTZZpc9qvVU8rwCmnn4fJsyEQeXF77cJW3Ew3hn7KtW7FKC6ya6F32Xl&id=100392285293394"]').click({ multiple: true });

        cy.contains('Batalha evolução das ruas').should('be.visible').scrollIntoView();
        cy.contains('05 DE JULHO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/permalink.php?story_fbid=pfbid0B6STN7rPCbHomvjF4VUkpR8Q6RFcqFA1B1TdpB1mMW8DEvF7EQH59nSQmNMsoWFEl&id=100392285293394"]').click({ multiple: true });

        cy.get('[aria-label="Go to slide 19"]').click();

        cy.contains('Batalha marabaixo 2022').should('be.visible').scrollIntoView();
        cy.contains('21 DE AGOSTO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/100069864276294/videos/1573905676456923"]').click({ multiple: true });

        cy.contains('Parada preta 2022').should('be.visible').scrollIntoView();
        cy.contains('16 DE SETEMBRO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/100069864276294/videos/455178049911556"]').click({ multiple: true });

        cy.contains('Batalha CBC 2022').should('be.visible').scrollIntoView();
        cy.contains('18 DE SETEMBRO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/100069864276294/videos/1296402900899569"]').click({ multiple: true });

        cy.get('[aria-label="Go to slide 22"]').click();

        cy.contains('3° edição Evolução das ruas 2022').should('be.visible').scrollIntoView();
        cy.contains('21 DE NOVEMBRO DE 2022').should('be.visible').scrollIntoView();
        cy.get('[href="https://www.facebook.com/100069864276294/videos/1298227440976469"]').click({ multiple: true });

        cy.contains('1° vestival de hip hop Macapá').should('be.visible').scrollIntoView();
        cy.contains('25 DE MARÇO DE 2023').should('be.visible').scrollIntoView();
        cy.get('[href="https://fb.watch/pHc0WbsmWf/"]').click({ multiple: true });


    });
});

