import { t, Selector } from "testcafe"
import { MainMenuSection } from '../../sections/mainMenuSection';
import { BasePage } from "../basePage";
import { IGroupSize } from "./openTrainings.interface";

const mainMenuSection: MainMenuSection = new MainMenuSection();
const basePage: BasePage = new BasePage();

export class OpenTrainings {
    url: string = 'https://4change.pl/szkolenia-otwarte/'
    mainContactFormId: string = '#et_pb_contact_form_0';
    formSubmitMessage: string = 'Dziękujemy za zgłoszenie';

    async goToPageManually(): Promise<void> {
        await t.click(await mainMenuSection.getTopMenuSingleElementLabel(this.url));
    }

    // main contact form
    async getContactFormLabel(): Promise<Selector> {
        return Selector(`div.et_pb_text_inner h2`);
    }

    async getContactFormFirstAndLastNameInput(): Promise<Selector> {
        return Selector(`${this.mainContactFormId} #et_pb_contact_name_0`);
    }

    async getContactFormCompanyInput(): Promise<Selector> {
        return Selector(`${this.mainContactFormId} #et_pb_contact_company_0`);
    }

    async getContactFormPhoneInput(): Promise<Selector> {
        return Selector(`${this.mainContactFormId} #et_pb_contact_phone_0`);
    }

    async getContactFormEmailInput(): Promise<Selector> {
        return Selector(`${this.mainContactFormId} #et_pb_contact_email_0`);
    }

    async getContactFormGroupSizeRadioButton(): Promise<IGroupSize> {
        const groupSizeOptionWrapper: Selector = Selector(`${this.mainContactFormId} .et_pb_contact_field_options_wrapper .et_pb_contact_field_options_list`);

        return {
            "5": groupSizeOptionWrapper.find('label').withAttribute('for', 'et_pb_contact_person_0_4_0'),
            "6-18": groupSizeOptionWrapper.find('label').withAttribute('for', 'et_pb_contact_person_0_4_1'),
            "19-50": groupSizeOptionWrapper.find('label').withAttribute('for', 'et_pb_contact_person_0_4_2'),
            "50+": groupSizeOptionWrapper.find('label').withAttribute('for', 'et_pb_contact_person_0_4_3')
        }
    }

    async getContactFormDescriptionInput(): Promise<Selector> {
        return Selector(`${this.mainContactFormId} #et_pb_contact_description_0`);
    }

    async getContactFormSubmitButton(): Promise<Selector> {
        return Selector(`${this.mainContactFormId} .et_pb_contact_submit`);
    }

    async getContactFormSubmitMessage(): Promise<Selector> {
        return Selector(`${this.mainContactFormId} .et-pb-contact-message`);
    }

    async sendEmail(groupSize: string) {
        await t.click(await basePage.getCovidBannerXButton());
        await t.click(await this.getContactFormLabel());
        await t.scrollBy(0, 200);
        await t.typeText(await this.getContactFormFirstAndLastNameInput(), 'Bot imie i nazwisko');
        await t.typeText(await this.getContactFormCompanyInput(), 'Bot nazwa firmy');
        await t.typeText(await this.getContactFormPhoneInput(), '111222333');
        await t.typeText(await this.getContactFormEmailInput(), 'bot@szkoleniaOtwarte.pl');
        await t.click(await (await this.getContactFormGroupSizeRadioButton())[groupSize]);
        await t.typeText(await this.getContactFormDescriptionInput(), 'Bot description');
        await t.click(await this.getContactFormSubmitButton());
        await t.wait(20000);
    }
}
