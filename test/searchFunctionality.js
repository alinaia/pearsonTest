// Import requirement packages
require('chromedriver');
const {Builder, Key, By, until, Capabilities} = require('selenium-webdriver');
const caps = new Capabilities();

describe('Access pearson.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();    
    });

    it('Search on pearson.com', async function() {
    //Maximize current window
        driver.manage().window().maximize();
    // Load the page
        await driver.get('https://www.pearson.com/');
    //Accept cookies
        await driver.findElement(By.id('cookie-notification-policy-accept-continue')).click();
    // Find the search box by id
        await driver.wait(until.elementLocated(By.id('search-box-input')), 10000);
        await driver.findElement(By.id('search-box-input')).click();
    // Enter keywords and click 'Enter'
        await driver.findElement(By.id('search-box-input')).sendKeys('software testing', Key.ENTER);
    //Wait the total of search results and count them
        await driver.wait(until.elementLocated(By.xpath("//div[@class='st-results-container']//article")), 10000); 
        driver.findElements(By.xpath("//article")).then(elements => console.log(elements.length));
    // Scroll to the Next button and click it
        let element = driver.findElement(By.xpath("//*[@class='pagination']//*[contains(text(), 'Next')]"));
        driver.executeScript("arguments[0].scrollIntoView(true);",element);
        await driver.findElement(By.xpath("//*[@class='pagination']//*[contains(text(), 'Next')]")).click();
    //Wait the total of search results from the second page and count them
        await driver.wait(until.elementLocated(By.xpath("//div[@class='st-results-container']//article")), 10000); 
        driver.findElements(By.xpath("//article")).then(elements => console.log(elements.length));    
    // Scroll to the third article on page and open it
        await driver.wait(until.elementLocated(By.xpath("//div[@class='st-results-container']")), 10000);
        let article = driver.findElement(By.xpath("//article[3]//p[@class='productItem__description']"));
        driver.executeScript("arguments[0].scrollIntoView(true);",article);
        await driver.wait(until.elementLocated(By.xpath("//article[@class='productItem test'][3]//a[contains(@href, '://')]")), 10000);
        await driver.findElement(By.xpath("//article[@class='productItem test'][3]//a[contains(@href, '://')]")).click();
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
              return title === 'December trading update';
            });
            }, 1000);
    });
    // Close the browser after running tests
    after(() => driver && driver.quit());
})