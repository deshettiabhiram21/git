
const { Builder, By } = require('selenium-webdriver');

async function testRegistrationForm() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://127.0.0.1:5500/');

        await driver.findElement(By.id('username')).sendKeys('student1');
        await driver.findElement(By.id('email')).sendKeys('student1@example.com');
        await driver.findElement(By.id('phone')).sendKeys('9876543210');
        await driver.findElement(By.id('password')).sendKeys('password123');
        await driver.findElement(By.css('button[type="submit"]')).click();

       
        await driver.sleep(1000);

        let message = await driver.findElement(By.id('message')).getText();
        console.log('Test Result:', message);

        console.log(message === 'Registration Successful!' ? 'Test Passed' : 'Test Failed');
    } finally {
        await driver.quit();
    }
}

testRegistrationForm();
