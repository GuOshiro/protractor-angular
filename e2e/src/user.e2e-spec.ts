import { UserPage } from './pageObjects/user.po';
import { HomePage } from './pageObjects/home.po';
import { browser } from 'protractor';

describe('User Page', () => {
    let homePage: HomePage;
    let userPage: UserPage;
    let imagemId;
    const comentario = 'Essa imagem é muito de boa!';
    const tituloDaImagem = 'Farol iluminado';

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
        imagemId = userPage.pegarUrlDaImagemEspecifica();
    });

    it('deve comentar na imagem', () => {
        if (userPage.pegarBotaoDePesquisa()) {
            expect(userPage.comentarNaImagem(comentario));
            expect(userPage.verificarSeFoiComentadoFoiPublicado()).toEqual(comentario);
        }
    });

});
