import { browser, by, element, ExpectedConditions } from 'protractor';

export class RegionChangePage {
    cityInput = element(by.id('city__front-input'));
    autoComleteItemFirstXpath = "(.//div[@class='b-autocomplete-item__reg' and text()='%s'])[1]";

    clearCityInput = async function() {
        await browser.wait(ExpectedConditions.visibilityOf(this.cityInput));    
        await this.cityInput.clear();
    }

    setTextCityInput = async function(text) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.cityInput)); 
        await this.cityInput.sendKeys(text);
    }

    clickFirstAutocompleteItem = async function(text) {
        var autoComleteItemFirst = await element(by.xpath(this.autoComleteItemFirstXpath.replace('%s', text)));
        await autoComleteItemFirst.click();
    }

}
