import { Page } from "../helpers/Page.js";

class LoginPage extends Page {
  constructor() {
    super();
  }

  clickLoginButton() {
    this.click(this.loginBtn)
  }

  get loginBtn(){
    return "Login"
  }
}


let loginPage = new LoginPage();
loginPage.navigateTo("My Page");
loginPage.clickLoginButton();
console.log(typeof loginPage);