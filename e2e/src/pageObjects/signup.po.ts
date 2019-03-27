import { browser, by, element } from 'protractor';

export class SignupPage {
    navegarParaSignUp() {
        browser.restart();
        return browser.get('/#/home/signup');
    }

    inserirValoresNosInputsDeCadastro() {
        element(by.css('input[formControlName=email]')).sendKeys('gustavo@alura.com');
        element(by.css('input[formControlName=fullName]')).sendKeys('gustavo');
        element(by.css('input[formControlName=userName]')).sendKeys('gustavo.oshiro');
        element(by.css('input[formControlName=password]')).sendKeys('123345567');
    }

    pegarBotaoDeSubmeterFormulario() {
        return element(by.css('.btn-primary'));
    }



}
