"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('yandex change region test', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let region, e1, e2, arr1, arr2;
        beforeEach(() => {
            protractor_1.browser.waitForAngularEnabled(false);
            protractor_1.browser.get('https://yandex.ru/');
        });
        it('set region London', () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.css('span.geolink__reg'))));
            console.log("Текущий регион:" + (yield protractor_1.element(protractor_1.by.css('span.geolink__reg')).getText()));
            region = yield protractor_1.element(protractor_1.by.css('a.geolink'));
            region.click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.id('city__front-input'))));
            yield protractor_1.element(protractor_1.by.id('city__front-input')).clear();
            yield protractor_1.element(protractor_1.by.id('city__front-input')).sendKeys("Лондон");
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.xpath("(.//div[@class='b-autocomplete-item__reg' and text()='Лондон'])[1]"))));
            yield protractor_1.element(protractor_1.by.xpath("(.//div[@class='b-autocomplete-item__reg' and text()='Лондон'])[1]")).click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.css('span.geolink__reg'))));
            console.log("Текущий регион:" + (yield protractor_1.element(protractor_1.by.css('span.geolink__reg')).getText()));
        }));
        it('get London homelink data', () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.xpath(".//a[text()='ещё']"))));
            yield protractor_1.element(protractor_1.by.xpath(".//a[text()='ещё']")).click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.xpath("(.//div[@role='menuitem']/a)[1]"))));
            e1 = protractor_1.element.all(protractor_1.by.css("div.home-tabs__more-item>a"));
            arr1 = [];
            yield e1.each(function (item) {
                return __awaiter(this, void 0, void 0, function* () {
                    arr1.push(yield item.getText());
                });
            });
            console.log("arr1=" + arr1);
        }));
        it('set region Paris', () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.css('span.geolink__reg'))));
            region = yield protractor_1.element(protractor_1.by.css('a.geolink'));
            region.click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.id('city__front-input'))));
            yield protractor_1.element(protractor_1.by.id('city__front-input')).clear();
            yield protractor_1.element(protractor_1.by.id('city__front-input')).sendKeys("Париж");
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.xpath("(.//div[@class='b-autocomplete-item__reg' and text()='Лондон'])[1]"))));
            yield protractor_1.element(protractor_1.by.xpath("(.//div[@class='b-autocomplete-item__reg' and text()='Париж'])[1]")).click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.css('span.geolink__reg'))));
            console.log("Текущий регион:" + (yield protractor_1.element(protractor_1.by.css('span.geolink__reg')).getText()));
        }));
        it('get Paris homelink data', () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.xpath(".//a[text()='ещё']"))));
            yield protractor_1.element(protractor_1.by.xpath(".//a[text()='ещё']")).click();
            e2 = protractor_1.element.all(protractor_1.by.css("div.home-tabs__more-item>a"));
            arr2 = [];
            yield e2.each(function (item) {
                return __awaiter(this, void 0, void 0, function* () {
                    arr2.push(yield item.getText());
                });
            });
            console.log("arr2=" + arr2);
        }));
        it('compare homelink data', () => __awaiter(this, void 0, void 0, function* () {
            expect(arr1.length).toBe(arr2.length);
            for (var i = 0; i < arr1.length; i++) {
                expect(arr1[i] == arr2[i]);
            }
        }));
    });
});
