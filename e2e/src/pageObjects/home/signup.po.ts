
import { browser, by, element } from 'protractor';

export class SignupPage {
  acessarHome() {
    return browser.get('/#/home/signup');
  }

  registrarUsuario(formControlName, valor){
    return element(by.formControlName(formControlName)).sendKeys(valor)
  }

  pegarBotaoRegister(){
      return element(by.buttonText('Register'))
  }

}
