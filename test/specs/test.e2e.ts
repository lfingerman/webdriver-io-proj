import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import { TestData } from '../data_factory/data.gen.js'
let firstName: string, lastName: string, email: string, password: string;


describe('My Login application', () => {
    before(() => {
        (
            firstName = TestData.generateUser().firstName,
            password = TestData.generateUser().password
        ) // Generate user data before the tests run
    })
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(firstName, password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})

