import { t, Selector } from 'testcafe';

export class MainFooterSection {
    formSubmitMessage: string = 'Dziękujemy za skontaktowanie się z nami.';

    // footer contact form
    async getFooterContactFormName(): Promise<Selector> {
        return Selector('#et_pb_contact_name_1');
    }

    async getFooterContactFormPhone(): Promise<Selector> {
        return Selector('#et_pb_contact_phone_1');
    }

    async getFooterContactFormEmail(): Promise<Selector> {
        return Selector('#et_pb_contact_email_1');
    }

    async getFooterContactFormDescription(): Promise<Selector> {
        return Selector('#et_pb_contact_message_1');
    }

    async getFooterContactFormCaptchaLabel(): Promise<Selector> {
        return Selector('.et_pb_contact_captcha_question');
    }

    async getFooterContactFormCaptchaInput(): Promise<Selector> {
        return Selector('.et_pb_contact_captcha');
    }

    async resolveFooterContactFormCaptchaLabel(): Promise<number>{
        const captchaLabel = (await Selector('.et_pb_contact_captcha_question').textContent).split('+');
        const captchaSum = Number(captchaLabel[0]) + Number(captchaLabel[1])
        
        return captchaSum;
    }

    async getFooterContactFormSubmitButton(): Promise<Selector> {
        return Selector('.et_contact_bottom_container .et_pb_contact_submit').nth(1);
    }

    async getFooterContactFormSubmitMessage(): Promise<Selector> {
        return Selector('#et_pb_contact_form_1 .et-pb-contact-message');
    }

    async sendEmail() {
        await t.typeText(await this.getFooterContactFormName(), 'Bot dolny formularz wartość pola imię z glównej strony');
        await t.typeText(await this.getFooterContactFormPhone(), '333444555');
        await t.typeText(await this.getFooterContactFormEmail(), 'bot@dolnyFormularz.com');
        await t.typeText(await this.getFooterContactFormDescription(), 'Bot dolny formularz wartość pola wiadomość');
        const captchaValue = await this.resolveFooterContactFormCaptchaLabel();
        await t.typeText(await this.getFooterContactFormCaptchaInput(), captchaValue.toString());
        await t.click(await this.getFooterContactFormSubmitButton());
        await t.wait(10000);
    }
}
