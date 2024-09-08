import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import LoginPage from '../screenobjects/login.page.js';

const pages = {
    login: LoginPage
}

Given(/^user is on the login page$/, async () => {
   await expect(LoginPage.LoginScreenPage).toBeDisplayed();
});

When(/^user login with (.*) and (.*) and click on login button$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^verify user should see (.*)$/, async (errorMessage) => {
    await expect(LoginPage.message).toBeExisting();
    await expect(LoginPage.message).toHaveText(errorMessage);
});