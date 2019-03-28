import { UserPage } from './pageObjects/user.po';
import { HomePage } from './pageObjects/home.po';
import { browser } from 'protractor';

let homePage: HomePage;
let userPage: UserPage;
const comentario = 'Essa imagem é muito de boa!';
const tituloDaImagem = 'Farol iluminado';
const tituloDaImagem2 = 'frio na montanha';


function procurarTituloAbstratido(titulo) {
    it('deve procurar imagem pelo metodo abstraido', function () {
        expect(userPage.navegarParaHome());
        expect(userPage.preencherInputDePesquisa(titulo));
        expect(userPage.navegarParaImagens(titulo));
    });
}

describe('User Page', () => {

    beforeEach(() => {
        userPage = new UserPage();
        homePage = new HomePage();
    });

    it('deve logar no sistema', () => {
        homePage.navegarParaSignIn();
        expect(homePage.passarParametroNoInputUserName());
        expect(homePage.passarParametroNoInputPassword());
        expect(homePage.logar().click());
    });

    procurarTituloAbstratido(tituloDaImagem);

    it('deve comentar na imagem', () => {
        if (userPage.pegarBotaoDePesquisa()) {
            expect(userPage.comentarNaImagem(comentario));
            expect(userPage.verificarSeFoiComentadoFoiPublicado()).toEqual(comentario);
        }
    });

    procurarTituloAbstratido(tituloDaImagem2);

    it('deve deletar image pelo título 2', () => {
        expect(userPage.pegarIdDasFotos());
    });


});


