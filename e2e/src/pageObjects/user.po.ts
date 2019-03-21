import { browser, by, element } from 'protractor';

export class UserPage {
    navigateTo() {
        return browser.get('/#/user/flavio');
    }

    navigateToImage(imageText: string) {
        element(by.tagName('img')).click();
    }

    navigateToSpecificImage(imageID) {
        return browser.get(`/#/p/${imageID}`);
    }


    verifyInput(imageText) {
        const input = element(by.id('searchImage'));
        input.sendKeys(imageText);
    }


    verifyButtonEnabled() {
        return element(by.id('publish'));
    }

    commentImage(comment) {
        element(by.css('textarea[formControlName=comment]')).sendKeys(comment);
        element(by.id('publish')).click();
    }

    getImageUrl() {
        browser.getCurrentUrl().then(url => url.split('/#/p/')[1]);
    }

    verifyComment() {
        const comments = element.all(by.id('comments')).all(by.css('p'));
        return comments.get(0).getText();
    }

}
