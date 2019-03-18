import { browser, by, element } from 'protractor';

export class SignupPage {
    navigateToSignUp() {
        browser.restart();
        return browser.get('/#/home/signup');
    }

    verifySignUpInputs() {
        element(by.css('input[formControlName=email]')).sendKeys('gustavo@alura.com');
        element(by.css('input[formControlName=fullName]')).sendKeys('gustavo');
        element(by.css('input[formControlName=userName]')).sendKeys('gustavo.oshiro');
        element(by.css('input[formControlName=password]')).sendKeys('123345567');
    }

    getSubmitButton() {
        return element(by.css('.btn-primary'));
    }



}
