import { browser, by, element } from 'protractor';

export class HomePage {
  navegarParaSignIn() {
    return browser.get('/#/home');
  }

  navegarParaSignUp() {
    return browser.get('/#/home/signup');
  }

  pegarParagrafoDoLogin() {
    return element(by.css('.text-center')).getText();
  }

  passarParametroNoInputUserName() {
    element(by.css('input[formControlName=userName]')).sendKeys('flavio');
  }

  passarParametroNoInputPassword() {
    element(by.css('input[formControlName=password]')).sendKeys('123');
  }

  logar() {
    return element(by.css('.btn-primary'));
  }

}
