import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await cadastroPage.cadastro('Ian', 'Silverio', '11955332211', 'contato.iansilverio@gmail.com', 'senha123', 'senha123')
        await homePage.openMenu('profile')
        expect ((await profilePage.profileName('Silverio Ian')).isDisplayed()).toBeTruthy()
    })
})

