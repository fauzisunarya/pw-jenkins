import {expect } from '@playwright/test';

export default class LoginPage{
    /**
     * @param {import('@playwright/test').Page} page
    */
   constructor(page){
    this.page = page;
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
   }

   async gotoUrl(url){
    await this.page.goto(url);
   }

   async login(username,password){
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
   }

   async loginExpectSucces(){
    await expect(this.page.locator('[data-test="title"]')).toContainText('Products');
}

   async loginExpectFailed(){
    await expect(this.page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
}

   async loginExpectUserLocked(){
    await expect(this.page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
}
}