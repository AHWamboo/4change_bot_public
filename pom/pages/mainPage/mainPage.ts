import { t, Selector } from 'testcafe';
import { ContactType } from "./mainPage.enum";

export class MainPage {
    url: string = 'https://4change.pl/';
    formSubmitMessage: string = 'Dziękujemy za zgłoszenie';

    async getSliderWhyUsButton(): Promise<Selector> {
        return Selector('.et_pb_slide_description .et_pb_button_wrapper .et_pb_more_button')
            .withAttribute('href', 'https://4change.pl/dlaczego-my/');
    }

    // main page middle contact form
    async getContactForm(): Promise<Selector> {
        return Selector('#et_pb_contact_form_0');
    }

    async getContactFormName(): Promise<Selector> {
        return Selector('#et_pb_contact_name_0');
    }

    async getContactFormCompany(): Promise<Selector> {
        return Selector('#et_pb_contact_company_0');
    }

    async getContactFormPhoneNumber(): Promise<Selector> {
        return Selector('#et_pb_contact_phone_0');
    }

    async getContactFormEmail(): Promise<Selector> {
        return Selector('#et_pb_contact_email_0');
    }

    async getContactFormContactType(contactType: ContactType): Promise<Selector> {
        return Selector('.et_pb_contact_field_radio').find('label').withAttribute('for', contactType);
    }

    async getContactFormContactTypeDirectContact(): Promise<Selector> {
        return Selector('.et_pb_contact_field_radio').find('label').withAttribute('for', 'et_pb_contact_contact_0_4_1');
    }

    async getContactFormDescription(): Promise<Selector> {
        return Selector('#et_pb_contact_description_0');
    }

    async getContactFormSubmitButton(): Promise<Selector> {
        return Selector('#et_pb_contact_form_0 .et_pb_contact_submit');
    }

    async getContactFormSubmitMessage(): Promise<Selector> {
        return Selector('#et_pb_contact_form_0 .et-pb-contact-message');
    }

    async sendEmail(contactType: ContactType) {
        await t.click(await this.getContactFormName());
        await t.typeText(await this.getContactFormName(), 'Bot wartość z pola imię i nazwisko z glównej strony');
        await t.typeText(await this.getContactFormCompany(), 'Bot wartość z pola firma z glównej strony');
        await t.typeText(await this.getContactFormPhoneNumber(), '111222333');
        await t.typeText(await this.getContactFormEmail(), 'bot@bot.com');
        await t.wait(5000);
        await t.click(await this.getContactFormContactType(contactType));
        await t.typeText(await this.getContactFormDescription(), 'Bot Wartość z pola co cię interesuję z głównej strony');
        await t.click(await this.getContactFormSubmitButton());
        await t.wait(2000);
    }
}
