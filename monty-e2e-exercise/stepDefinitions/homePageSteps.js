'use strict';
var homepage = require('../pageObjects/homePage.js');
var filterpage = require('../pageObjects/filterPage.js');
var helpers = require ('../support/helpers.js');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
var expect = chai.expect;
chai.use(chaiWebdriver(browser));
chai.use(require('chai-string'));

module.exports = function () 
{
    this.When(/^I am on the landing page$/, function(callback){
	    helpers.loadPage(homepage.url);
        callback();
	});

    this.Then(/^I can see logo in navigation bar$/, function(callback){
        expect(homepage.cssLogo.get()).to.be.visible();
        callback();
    });

    this.Given(/^I am viewing product list "([^"]*)"$/, function(p_Product, callback){
        homepage.search_button.get().click();
        homepage.searchtextbox.get().keys(p_Product);
        homepage.searchbar_button.get().click();

        browser.waitForExist(filterpage.Locators.cssheadertitle.get(), 5000);
        expect(filterpage.Locators.csstotalvalue.get()).to.be.visible();
        expect(filterpage.Locators.filteredlistheader_element.get().getText()).to.equalIgnoreCase(p_Product);
        this.filteredProduct = p_Product;
        callback();
    });
}