import { Locator, Page, expect } from "@playwright/test";

export class LoginClass {
    readonly login: Locator;
    readonly myAccount: Locator;
    readonly search: Locator;
    readonly email: Locator;
    readonly fnmae: Locator;
    readonly lname: Locator;
    readonly submit: Locator;

    constructor(public page: Page) {
        this.page = page;
        this.myAccount = page.locator("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
        this.login = page.locator("//span[normalize-space()='Login']")
        this.email = page.locator("//input[@id='input-email']"); 
        this.fnmae = page.locator("input[page.locator(\"']\"");
        this.lname = page.locator("input[name='password']");
        this.submit = page.locator("input[value='Login']");
    
    }

    async gotoURL() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/')
        await this.page.waitForURL(/.*lambdatest*/, {waitUntil: "domcontentloaded"})
    }

    public async loginHandler() {
        await this.page.waitForTimeout(5000)
        await this.myAccount.click();
        await this.login.click();
        await this.email.click
        await this.fnmae.fill("koushik350@gmail.com")
        await this.lname.fill("")
        await this.submit.click();

    }
}