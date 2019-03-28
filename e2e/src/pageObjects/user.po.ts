import { browser, by, element } from 'protractor';

export class UserPage {
    navegarParaHome() {
        return browser.get('/#/user/flavio');
    }

    navegarParaImagens(imageText: string) {
        element(by.tagName('img')).click();
    }

    navegarParaImagemEspecifica(imageID) {
        return browser.get(`/#/p/${imageID}`);
    }

    preencherInputDePesquisa(imageText) {
        const input = element(by.id('searchImage'));
        input.sendKeys(imageText);
    }

    pegarBotaoDePesquisa() {
        return element(by.id('publish'));
    }

    comentarNaImagem(comment) {
        element(by.css('textarea[formControlName=comment]')).sendKeys(comment);
        element(by.id('publish')).click();
    }

    pegarUrlDaImagemEspecifica() {
        browser.getCurrentUrl().then(url => url.split('/#/p/')[1]);
    }

    verificarSeFoiComentadoFoiPublicado() {
        const comments = element.all(by.id('comments')).all(by.css('p'));
        return comments.get(0).getText();
    }

    pegarIdDasFotos() {
        let value;
        value = element.all(by.css('.list-unstyled li div')).reduce(function (acc, elem) {
            return elem.getText().then(function (text) {
                return acc + text + ' ';
            });
        }, '');
    }

}
