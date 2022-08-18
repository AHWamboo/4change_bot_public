import { t, Selector } from 'testcafe';

export class MainMenuSection {
    async getEmailAddressLabel(): Promise<Selector> {
        return Selector('.gm-toolbar-email .gm-toolbar-contacts__txt a');
    }

    async getTelephoneNumberLabel(): Promise<Selector> {
        return Selector('.gm-toolbar-phone .gm-toolbar-contacts__txt a');
    }

    async getLogoImg(): Promise<Selector> {
        return Selector('.gm-container .gm-logo');
    }

    async getTopMenuSingleElementLabel(hrefAttributeValue: string): Promise<Selector> {
        return Selector('.menu-item')
            .filterVisible()
            .find('a')
            .withAttribute('href', hrefAttributeValue);
    }
}
