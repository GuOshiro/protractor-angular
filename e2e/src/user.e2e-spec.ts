import { UserPage } from './pageObjects/user.po';
import { HomePage } from './pageObjects/home.po';
import { browser } from 'protractor';

describe('User Page', () => {
    let homePage: HomePage;
    let userPage: UserPage;
    let imageID;
    const comment = 'Essa imagem é muito boa!';
    const imageText = 'Não lembro onde foi';

    beforeEach(() => {
        userPage = new UserPage();
        homePage = new HomePage();
    });

    it('should search image by name and comment in image', () => {
        homePage.navigateToSignIn();
        expect(homePage.verifyUserNameInput());
        expect(homePage.verifyPasswordInput());
        expect(homePage.submitLogin().click());
        expect(userPage.verifyInput(imageText));
        expect(userPage.navigateToImage(imageText));
        imageID = expect(userPage.getImageUrl());
    });

    it('should comment image', () => {
        userPage.navigateToSpecificImage(imageID);
        if (userPage.verifyButtonEnabled()) {
            expect(userPage.commentImage(comment));
            expect(userPage.verifyComment());
        }
    });

});
