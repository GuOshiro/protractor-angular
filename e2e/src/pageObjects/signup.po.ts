import { browser, by, element } from 'protractor';

export class SignUpPage {

  navegarParaSignUp() {
    return browser.get('/#/home/signup');
  }

  registraUsuario(formControlName, valor){
      return element(by.formControlName(formControlName)).sendKeys(valor)
  }

  pegarBotaoRegister(){
      return element(by.buttonText('Register'))
  }
}
