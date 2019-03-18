import { HomePage } from './pageObjects/home.po';
import { SignupPage } from './pageObjects/signup.po';

describe('SignIn and SignUp Page', () => {
  let page: HomePage;
  let signupPage: SignupPage;

  beforeEach(() => {
    page = new HomePage();
    signupPage = new SignupPage();
  });

  it('should display Login Message', () => {
    page.navigateToSignIn();
    expect(page.getParagraphText()).toEqual('Login');
  });

  it('should have login and password input', () => {
    page.navigateToSignIn();
    expect(page.verifyUserNameInput());
    expect(page.verifyPasswordInput());
  });

  it('should display login button', () => {
    page.navigateToSignIn();
    expect(page.submitLogin().click());
  });

  it('should route to signup page and create a user', () => {
    signupPage.navigateToSignUp();
    expect(signupPage.verifySignUpInputs());
    expect(signupPage.getSubmitButton().submit());
  });

});
