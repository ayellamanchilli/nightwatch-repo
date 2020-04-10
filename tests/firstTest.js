module.exports = {
    'My first test case': function(browser) {
        browser
        .url('https://ultimateqa.com/automation')
        .waitForElementVisible('a[href="http://courses.ultimateqa.com/users/sign_in"]')
        .assert.elementPresent("span#Automation_Practice");
    }
}