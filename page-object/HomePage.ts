import { browser, by, element, ExpectedConditions } from 'protractor';
import { async } from 'q';
import { chmodSync } from 'fs';
browser.waitForAngularEnabled(false);

export class HomePage {
    regionSpan = element(by.css('span.geolink__reg'));
    regionLink = element(by.css('a.geolink'));

    menuLink = element(by.xpath(".//a[text()='ещё']"));
    menuItemFirst = element(by.xpath("(.//div[@role='menuitem']/a)[1]"));
    menuItems = element.all(by.css("div.home-tabs__more-item>a"));

    getRegion = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.regionSpan));    
        var region = console.log("Текущий регион:" + await this.regionSpan.getText());
        return region;
    }

    clickRegion = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.regionLink));    
        this.regionLink.click();
    }

    clickMenuLink = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.menuLink)); 
        await this.menuLink.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.menuItemFirst));  
    }

    getMenuItems = async function() {
        var arr = await this.menuItems.getText();
        console.log("arr = "+ arr);
        return arr;
    }


}

