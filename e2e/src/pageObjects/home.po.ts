import { browser, by, element } from 'protractor';

export class HomePage {
  navigateToSignIn() {
    return browser.get('/#/home');
  }

  navigateToSignUp() {
    return browser.get('/#/home/signup');
  }

  getParagraphText() {
    return element(by.css('.text-center')).getText();
  }

  verifyUserNameInput() {
    element(by.css('input[formControlName=userName]')).sendKeys('flavio');
  }

  verifyPasswordInput() {
    element(by.css('input[formControlName=password]')).sendKeys('123');
  }

  submitLogin() {
    return element(by.css('.btn-primary'));
  }

}
