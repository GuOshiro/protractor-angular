import { SigninPage } from './pageObjects/home/signin.po';
import { SignupPage } from './pageObjects/home/signup.po';

describe('Testando tela home', () => {
  let signinPage: SigninPage;
  let signupPage: SignupPage;

  beforeEach(() => {
    signinPage = new SigninPage();
    signupPage = new SignupPage();
  });

  it('Deve ir para home', () => {
    signinPage.acessarHome();
  });

  it('Deve verificar url', () => {
    expect(signinPage.verificarUrl()).toEqual('http://localhost:4200/#/home');
  });

  it('Deve fazer login', () => {
    expect(signinPage.pegarInput('userName', 'flavio'))
    expect(signinPage.pegarInput('password', '123'))
    expect(signinPage.pegarBotaoLogin().click())
  });

 

});
