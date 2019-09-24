import { SigninPage } from './pageObjects/signin.po';
import { SignUpPage } from './pageObjects/signup.po';

describe('Testando tela home', () => {
  let signinPage: SigninPage;
  let signupPage: SignUpPage;
  let informacoesDoUsuario = [
    {nome: 'email', valor:'gustavo@alura.com'},
    {nome: 'fullName', valor:'Gustavo Oshiro'},
    {nome: 'userName', valor:'gustavoshiro'},
    {nome: 'password', valor:'12345678'}
  ]
  beforeEach(() => {
    signinPage = new SigninPage();
    signupPage = new SignUpPage();
  });

  it('Dever navegar para Signup', ()=> {
    signupPage.navegarParaSignUp()
  })

  it('Dever cadastrar Usuario', ()=> {
    informacoesDoUsuario.forEach(usuario => {
      signupPage.registraUsuario(usuario.nome, usuario.valor)
    })
    expect(signupPage.pegarBotaoRegister().click())
  })


  it('Deve verificar url', () => {
    expect(signinPage.verificarUrl()).toEqual('http://localhost:4200/#/home');
  });

  it('Deve fazer login', ()=>{
    expect(signinPage.pegarInput('userName', 'flavio'))
    expect(signinPage.pegarInput('password', '123'))
    expect(signinPage.pegarBotaoLogin().click())
  })

});
