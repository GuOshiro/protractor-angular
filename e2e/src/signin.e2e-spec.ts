import { SigninPage } from './signin.po';

describe('Testando tela home', () => {
  let signinPage: SigninPage;

  beforeEach(() => {
    signinPage = new SigninPage();
  });

  it('Deve ir para home', () => {
    signinPage.acessarHome();
  });

  it('Deve verificar url', () => {
    expect(signinPage.verificarUrl()).toEqual('http://localhost:4200/#/home');
  });

});
