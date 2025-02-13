import { test} from '@playwright/test';
import Pomanager from "../../../pages/pomanager"
// const devTestData = JSON.parse(JSON.stringify(require('../../../data/dev/dataDev.json')));
// const dataDev = devTestData.searchValuesFilterTableListCustomerPositif;
// const qaTestData = JSON.parse(JSON.stringify(require('../../../data/qa/dataQa.json')));
// const dataQa = qaTestData.searchValuesFilterTableListCustomerPositif
import { ReportingApi } from '@reportportal/agent-js-playwright';


test('Login menggunakan kredensial valid', async ({browserName,page},testInfo)=>{
    ReportingApi.setTestCaseId('TS-UI-LOGIN-001');
    ReportingApi. setDescription(`
        Test Step :
        1. Visit ke url saucedemo
        2. Login dengan kredensial valid
        3. Menampilkan halaman utama`)
    ReportingApi.addAttributes([
        {
            key: 'browser',
            value: browserName,
        }
        ]);
    // let testData = dataDev;
    // if(process.env.ENV == 'qa'){
    //     testData = dataQa;
    // }
    const pomanager = new Pomanager(page);
    const loginpage = pomanager.getLoginPage();
    await loginpage.gotoUrl(process.env.WEB_URL)
    await loginpage.login(process.env.USERNAME1, process.env.PASSWORD)
    await loginpage.loginExpectSucces();
    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
})