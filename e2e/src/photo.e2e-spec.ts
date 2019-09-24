import { PhotoFormPage } from './pageObjects/photos/photo-form.po'
import { PhotoListPage } from './pageObjects/photos/photo-list.po'

describe('Testando funcionalidade de fotos', () => {
    
    let photoFormPage: PhotoFormPage;
    let photoListPage: PhotoListPage;

    beforeEach(() => {
        photoFormPage = new PhotoFormPage();
        photoListPage = new PhotoListPage();
    });


});


