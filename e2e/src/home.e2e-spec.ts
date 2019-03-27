import { HomePage } from './pageObjects/home.po';
import { SignupPage } from './pageObjects/signup.po';

describe('page de signin e signup', () => {
  let homePage: HomePage;
  let signupPage: SignupPage;

  beforeEach(() => {
    homePage = new HomePage();
    signupPage = new SignupPage();
  });

  it('Deve mostrar a label Login', () => {
    homePage.navegarParaSignIn();
    expect(homePage.pegarParagrafoDoLogin()).toEqual('Login');
  });

  it('deve conter os inputs de senha e login', () => {
    homePage.navegarParaSignIn();
    expect(homePage.passarParametroNoInputUserName());
    expect(homePage.passarParametroNoInputPassword());
  });

  it('deve funcionar a função de submit', () => {
    homePage.navegarParaSignIn();
    expect(homePage.logar().click());
  });

  it('deve navegar para página de sign up e cadastrar um usuário', () => {
    signupPage.navegarParaSignUp();
    expect(signupPage.inserirValoresNosInputsDeCadastro());
    expect(signupPage.pegarBotaoDeSubmeterFormulario().submit());
  });

});
