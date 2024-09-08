import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage{
    /**
     * define selectors using getter methods
     */

    public get LoginScreenPage () {
        return $('//android.widget.ScrollView[@content-desc="test-Login"]/android.view.ViewGroup')
    }
    public get inputUsername () {
        return $('~test-Username');
    }

    public get inputPassword () {
        return $('~test-Password');
    }

    public get btnSubmit () {
        return $('~test-LOGIN');
    }
    public get message () {
        return $('//android.view.ViewGroup[@content-desc="test-Error message"] //android.widget.TextView');
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    
}

export default new LoginPage();
