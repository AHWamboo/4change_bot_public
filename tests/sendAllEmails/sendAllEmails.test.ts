import { t } from 'testcafe';
import { BasePage } from '../../pom/pages/basePage';
import { ContactPage } from '../../pom/pages/contactPage/contactPage';
import { MainPage } from '../../pom/pages/mainPage/mainPage';
import { ContactType } from '../../pom/pages/mainPage/mainPage.enum';
import { OpenTrainings } from '../../pom/pages/openTrainings/openTrainings';
import { MainFooterSection } from '../../pom/sections/mainFooterSection';

const basePage: BasePage = new BasePage();
const mainPage: MainPage = new MainPage();
const contacPage: ContactPage = new ContactPage();
const openTrainings: OpenTrainings = new OpenTrainings();
const mainFooterSection: MainFooterSection = new MainFooterSection();

fixture `Send all available emails from the site, using all available contact forms`
    .page `${basePage.url}`
    .beforeEach(async t => {
        await basePage.closeCovidBanner();
        await basePage.closeCookieBanner();
    });

test('Send e-mail from main page using first contact form, using online type contact', async t => {
    await mainPage.sendEmail(ContactType.online);
    await t.expect((await mainPage.getContactFormSubmitMessage()).textContent).eql(mainPage.formSubmitMessage);
});

test('Send e-mail from main page using first contact form, using direct type contact', async t => {
    await mainPage.sendEmail(ContactType.directContact);
    await t.expect((await mainPage.getContactFormSubmitMessage()).textContent).eql(mainPage.formSubmitMessage);
});

test('Send e-mail from main page using second contact form, footer', async t => {
    await mainFooterSection.sendEmail();
    await t.expect(await (await mainFooterSection.getFooterContactFormSubmitMessage()).textContent).eql(mainFooterSection.formSubmitMessage);
});

test('Send e-mail from contact page using first contact form', async t => {
    await contacPage.goToPageManually();
    await contacPage.sendEmail();
    await t.expect(await (await contacPage.getContactFormSubmitMessage()).textContent).eql(contacPage.formSubmitMessage);
});
    
test('Send e-mail from open trainings page using first contact form, choosing 5 group size', async t => {
    await openTrainings.goToPageManually();
    await openTrainings.sendEmail('5');
    await t.expect(await (await openTrainings.getContactFormSubmitMessage()).textContent).eql(openTrainings.formSubmitMessage);
});

test('Send e-mail from open trainings page using first contact form, choosing 6-18 group size', async t => {
    await openTrainings.goToPageManually();
    await openTrainings.sendEmail('6-18');
    await t.expect(await (await openTrainings.getContactFormSubmitMessage()).textContent).eql(openTrainings.formSubmitMessage);
});

test('Send e-mail from open trainings page using first contact form, choosing 19-50 group size', async t => {
    await openTrainings.goToPageManually();
    await openTrainings.sendEmail('19-50');
    await t.expect(await (await openTrainings.getContactFormSubmitMessage()).textContent).eql(openTrainings.formSubmitMessage);
});

test('Send e-mail from open trainings page using first contact form, choosing 50+ group size', async t => {
    await openTrainings.goToPageManually();
    await openTrainings.sendEmail('50+');
    await t.expect(await (await openTrainings.getContactFormSubmitMessage()).textContent).eql(openTrainings.formSubmitMessage);
});
