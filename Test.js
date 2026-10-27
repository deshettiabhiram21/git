const {Builder , By , Key , until } = require('selenium-webdriver');
async function toGoogle(){
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('selenium webdriver',Key.RETURN);
        await driver.wait(until.titleContains('selenium webdriver'),100000);
        let title = await driver.getTitle();
        console.log('title',title);

        if(title.includes('selenium webdriver')){
            console.log('Test passed');
        }else{
            console.log('Test failed');
        }
    }
    catch(error){
        console.log('error',error);
    }
    finally{
        await driver.quit();
    }
}
toGoogle();