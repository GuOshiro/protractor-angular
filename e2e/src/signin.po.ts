import { browser, by, element } from 'protractor';

export class SigninPage {
  acessarHome() {
    return browser.get('/#/home');
  }
  verificarUrl() {
    return browser.getCurrentUrl();
  }

  pegarInput(formControlName, valor){
    return element(by.css(`input[formControlName="${formControlName}"]`)).sendKeys(valor);
  }

  pegarBotaoLogin(){
    return element(by.buttonText('login'))
  }
}
