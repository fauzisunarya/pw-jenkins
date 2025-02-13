const { chromium, expect } = require('@playwright/test');

module.exports = async config => {

  const {storageState} = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.WEB_URL);
  await page.locator('[data-test="username"]').fill(process.env.USERNAME1);
  await page.locator('[data-test="password"]').fill(process.env.PASSWORD);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  await page.context().storageState({ path: storageState });
  await browser.close();
};

const dotenv = require('dotenv');
async function globalSetup() {
    try {
        if (process.env.ENV) {
            dotenv.config({
                path: `.env.${process.env.ENV}`,
                override: true
            });
        }
    } catch (error) {
        console.error("Error in loading environment variables", error)
    }
}
export default globalSetup;


