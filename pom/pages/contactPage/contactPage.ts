import { t, Selector } from "testcafe"
import { MainMenuSection } from '../../sections/mainMenuSection';
import { BasePage } from "../basePage";

const mainMenuSection: MainMenuSection = new MainMenuSection();
const basePage: BasePage = new BasePage();

export class ContactPage {
    url: string = 'https://4change.pl/kontakt/';
    formSubmitMessage: string = 'Dziękujemy za skontaktowanie się z nami.';

    async goToPageManually(): Promise<void> {
        await t.click(await mainMenuSection.getTopMenuSingleElementLabel(this.url));
    }

    async getContactFormNameInput(): Promise<Selector> {
        return Selector('#et_pb_contact_name_0');
    }

    async getContactFormEmailInput(): Promise<Selector> {
        return Selector('#et_pb_contact_email_0');
    }

    async getContactFormPhoneInput(): Promise<Selector> {
        return Selector('#et_pb_contact_phone_0');
    }

    async getContactFormDescriptionTextArea(): Promise<Selector> {
        return Selector('#et_pb_contact_message_0');
    }

    async getContactFormSubmitButton(): Promise<Selector> {
        return Selector('#et_pb_contact_form_0 .et_contact_bottom_container button');
    }

    async getContactFormSubmitMessage(): Promise<Selector> {
        return Selector('#et_pb_contact_form_0 .et-pb-contact-message');
    }

    async sendEmail() {
        await t.click(await basePage.getCovidBannerXButton());
        await t.typeText(await this.getContactFormNameInput(), 'Bot wartość z pola imię, strona kontaktowa');
        await t.typeText(await this.getContactFormEmailInput(), 'Bot@stronaKontaktowa.pl');
        await t.typeText(await this.getContactFormPhoneInput(), '111222333');
        await t.typeText(await this.getContactFormDescriptionTextArea(), 'Bot wartość z pola wiadomość. strona kontaktowa');
        await t.click(await this.getContactFormSubmitButton());
        await t.wait(5000);
    }
}
