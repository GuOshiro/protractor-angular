import { UserPage } from './pageObjects/user.po';
import { HomePage } from './pageObjects/home.po';
import { browser } from 'protractor';

describe('User Page', () => {
    let homePage: HomePage;
    let userPage: UserPage;
    const comentario = 'Essa imagem é muito de boa!';
    const tituloDaImagem = 'Farol iluminado';
    const tituloDaImagem2 = 'frio na montanha';

    beforeEach(() => {
        userPage = new UserPage();
        homePage = new HomePage();
    });

    it('deve procurar imagem pelo titulo', () => {
        homePage.navegarParaSignIn();
        expect(homePage.passarParametroNoInputUserName());
        expect(homePage.passarParametroNoInputPassword());
        expect(homePage.logar().click());
        expect(userPage.preencherInputDePesquisa(tituloDaImagem));
        expect(userPage.navegarParaImagens(tituloDaImagem));
    });

    it('deve comentar na imagem', () => {
        if (userPage.pegarBotaoDePesquisa()) {
            expect(userPage.comentarNaImagem(comentario));
            expect(userPage.verificarSeFoiComentadoFoiPublicado()).toEqual(comentario);
        }
    });

    it('deve procurar imagem pelo titulo 2', () => {
        homePage.navegarParaSignIn();
        expect(homePage.passarParametroNoInputUserName());
        expect(homePage.passarParametroNoInputPassword());
        expect(homePage.logar().click());
        expect(userPage.preencherInputDePesquisa(tituloDaImagem2));
        expect(userPage.navegarParaImagens(tituloDaImagem2));
    });

    it('deve deletar image pelo título 2', () => {
        expect(userPage.pegarIdDasFotos());
    });

});
