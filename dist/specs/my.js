"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('angularjs homepage todo list', function () {
    beforeEach(function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    });
    it('should add a todo', function () {
        protractor_1.browser.get('https://angularjs.org');
    });
});
