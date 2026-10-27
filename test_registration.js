const { Builder, By, until } = require("selenium-webdriver");

async function testRegistration() {
    const driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        await driver.get("http://localhost:8081");

        await driver.findElement(By.id("name"))
            .sendKeys("Abhiram");

        await driver.findElement(By.id("email"))
            .sendKeys("abhiram@example.com");

        await driver.findElement(By.id("submit"))
            .click();

        await driver.wait(
            until.elementLocated(By.tagName("body")),
            5000
        );

        const result = await driver.findElement(By.tagName("body"))
            .getText();

        if (result.includes("Registration successful!")) {
            console.log("TEST PASSED:", result);
        } else {
            console.log("TEST FAILED:", result);
        }

    } catch (error) {
        console.error("Test error:", error.message);
    } finally {
        await driver.quit();
    }
}

testRegistration();