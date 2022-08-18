import { t, Selector } from 'testcafe';

export class BasePage {
    url: string = 'https://4change.pl';

    // CovidBanner
    async getCovidBannerDiv(): Promise<Selector> {
        return Selector('.cv-alert-bar');
    }

    async getCovidBannerCoronaImg(): Promise<Selector> {
        return Selector('.cv-alert-bar img');
    }

    async getCovidBannerLabel(): Promise<Selector> {
        return Selector('.cv-alert-bar span.cv-alert-title');
    }

    async getCovidBannerText(): Promise<Selector> {
        return Selector('.cv-alert-bar .cv-alert-message');
    }

    async getCovidBannerAnchor(): Promise<Selector> {
        return Selector('.cv-alert-bar a.cv-alert-title');
    }

    async getCovidBannerXButton(): Promise<Selector> {
        return Selector('.cv-alert-closer i');
    }

    // CookiesBanner
    async getCookiesBannerDiv(): Promise<Selector> {
        return Selector('.cookie-notice-container');
    }

    async getCookiesBannerText(): Promise<Selector> {
        return Selector('.cookie-notice-container #cn-notice-text');
    }

    async getCookiesBannerOkButton(): Promise<Selector> {
        return Selector('.cookie-notice-container #cn-accept-cookie');
    }

    async getCookiesBannerXButton(): Promise<Selector> {
        return Selector('.cookie-notice-container #cn-close-notice');
    }

    async closeCovidBanner() {
        (await this.getCovidBannerXButton())? await t.click(await this.getCovidBannerXButton()) : console.log("closeCovidBanner: false")
    }

    async closeCookieBanner() {
        (await this.getCookiesBannerXButton())? await t.click(await this.getCookiesBannerXButton()) : console.log("getCookiesBannerXButton: false")
    }
}
