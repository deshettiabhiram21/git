const { Builder, By, until } = require('selenium-webdriver');

async function runTest() {
    const driver = await new Builder()
        .forBrowser('chrome')
        .build();

    try {
    
        await driver.get('http://localhost:3000');

    
        await driver.findElement(By.id('username'))
            .sendKeys('testuser');

    
        await driver.findElement(By.id('email'))
            .sendKeys('testuser@example.com');

        
        await driver.findElement(By.id('password'))
            .sendKeys('password123');

        
        await driver.findElement(By.tagName('button'))
            .click();

        
        await driver.wait(
            until.elementLocated(
                By.xpath("//*[contains(text(), 'Registration successful!')]")
            ),
            10000
        );

        console.log('Test Passed: Registration was successful.');

    } catch (error) {
        console.log('Test Failed:', error.message);

    } finally {
        await driver.quit();
    }
}

runTest();