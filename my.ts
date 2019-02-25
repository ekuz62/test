import { browser, by, element, ExpectedConditions } from 'protractor';
import { WebdriverWebElement } from 'protractor/built/element';
import { async } from 'q';

describe('yandex change region test', async function() {
  let region, e1, e2, arr1, arr2;


  beforeEach(() => {

    browser.waitForAngularEnabled(false);
    browser.get('https://yandex.ru/');
  })

  it('set region London', async () => {
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.css('span.geolink__reg'))));    
    console.log("Текущий регион:" + await element(by.css('span.geolink__reg')).getText());

    region = await element(by.css('a.geolink'));
    region.click();

    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.id('city__front-input'))));        
    await element(by.id('city__front-input')).clear();
    await element(by.id('city__front-input')).sendKeys("Лондон");

    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath("(.//div[@class='b-autocomplete-item__reg' and text()='Лондон'])[1]"))));        
    await element(by.xpath("(.//div[@class='b-autocomplete-item__reg' and text()='Лондон'])[1]")).click();        

    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.css('span.geolink__reg'))));   
    console.log("Текущий регион:" + await element(by.css('span.geolink__reg')).getText());
  })
 
  it('get London homelink data', async () => {
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath(".//a[text()='ещё']"))));   
    await element(by.xpath(".//a[text()='ещё']")).click();  
    
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath("(.//div[@role='menuitem']/a)[1]"))));   

    e1 = element.all(by.css("div.home-tabs__more-item>a"));

    arr1 = [];
    await e1.each(async function(item){
      arr1.push(await item.getText());
    })
    console.log("arr1="+arr1);
  })

  it('set region Paris', async () => {
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.css('span.geolink__reg')))); 
    region = await element(by.css('a.geolink'));
    region.click();

    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.id('city__front-input'))));        
    await element(by.id('city__front-input')).clear();
    await element(by.id('city__front-input')).sendKeys("Париж");

    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath("(.//div[@class='b-autocomplete-item__reg' and text()='Лондон'])[1]"))));        
    await element(by.xpath("(.//div[@class='b-autocomplete-item__reg' and text()='Париж'])[1]")).click();        

    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.css('span.geolink__reg'))));   
    console.log("Текущий регион:" + await element(by.css('span.geolink__reg')).getText());

  })

  it('get Paris homelink data', async () => {
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.xpath(".//a[text()='ещё']"))));   
    await element(by.xpath(".//a[text()='ещё']")).click();  
    e2 = element.all(by.css("div.home-tabs__more-item>a"));

    arr2 = [];
    await e2.each(async function(item){
      arr2.push(await item.getText());
    })
    console.log("arr2="+arr2);
  })

  it('compare homelink data', async () => {
    expect(arr1.length).toBe(arr2.length);
    for(var i=0; i<arr1.length; i++){
        expect(arr1[i] == arr2[i])
    }
  });
    
}    
)