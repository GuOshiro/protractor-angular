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
        return element(by.buttonText('Publish')).isEnabled();
    }

    commentImage(comment) {
        element(by.css('input[formControlName=comment]')).sendKeys(comment);
        element(by.id('publish')).click();
    }

    getImageUrl() {
        let imageID;
        browser.getCurrentUrl().then(url => imageID = url.split('/#/p/')[1]);
        console.log(imageID);
        return imageID;
    }

    verifyComment() {
        const texts = element(by.model('comment.text'));
        console.log(texts);
    }

}
