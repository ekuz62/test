import { browser, by, element, ExpectedConditions } from 'protractor';
import {HomePage} from './page-object/Homepage';
import {RegionChangePage} from './page-object/RegionChangePage';


describe('yandex change region test', async function() {
  let arr1, arr2;
  const homepage = new HomePage();
  const regionChangePage = new RegionChangePage();
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get('https://yandex.ru/');    
  })

  it('test', async () => {
    await homepage.getRegion();
    await homepage.clickRegion();

    await regionChangePage.clearCityInput();
    await regionChangePage.setTextCityInput("Лондон");
    await regionChangePage.clickFirstAutocompleteItem("Лондон");  

    await homepage.getRegion(); 
    await homepage.clickMenuLink();  

    arr1 = await homepage.getMenuItems(); 

    await homepage.clickRegion();

    await regionChangePage.clearCityInput();
    await regionChangePage.setTextCityInput("Париж");
    await regionChangePage.clickFirstAutocompleteItem("Париж"); 

    await homepage.getRegion(); 
    await homepage.clickMenuLink();  

    arr2 = await homepage.getMenuItems(); 

    expect(arr1).toEqual(arr2);
    
  });
    
}    
)