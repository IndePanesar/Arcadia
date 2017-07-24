'use strict';
//var homepage = require('../pageObjects/homePage.js');
var filterpage = require('../pageObjects/filterPage.js');
var helpers = require ('../support/helpers.js');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
var expect = chai.expect;
chai.use(chaiWebdriver(browser));
chai.use(require('chai-string'));

module.exports = function () 
{
    // Clicks the Refine Filter button and ensure the page header is "Filter" 
    this.Given(/^I filter the product list$/, function(callback){
        filterpage.Actions.refineFilterButton.click();
        expect(filterpage.Actions.filterButtonCaption.get()).to.equalIgnoreCase("Filter");
        callback();
    });

    // And filter the list by an option
    this.Given(/^I filter by option "([^"]*)"$/, function(p_FilterOption, callback){
		var filterXpath = filterpage.Actions.xpathlocatorforfilter.get(p_FilterOption);
		browser.element(filterXpath).click();
        
        var filterOptionsXpath = filterpage.Actions.xpathlocatorforfilteroptions.get("Colour", p_FilterOption);
        var filterElements = browser.elements(filterOptionsXpath);
        console.log("Filter option %s has %d options",  p_FilterOption, filterElements.value.length);
        callback();
    });

    // Select a filter option from the list
    this.Given(/^I select colour "([^"]*)"$/, function(p_Filter, callback){
        // Get the XPath for the filter and filter option
        var filterOptionsXpath = filterpage.Actions.xpathlocatorforfilteroptions.get("Colour");
        browser.waitForExist(filterOptionsXpath, 5000);
        browser.element(filterOptionsXpath).click();

        var filterText = browser.element(filterOptionsXpath).getText().split(" ");
        console.log("Item %s has %s options", filterText[0], filterText[1].replace(/\D/g,''));
        callback();
    });
    
    // Apply the filters selected
    this.When(/^I apply these filters$/, function(callback){
         filterpage.Actions.applyRefinements.click();
         callback();
    });

    // Verify the filter button has the total number of filters applied
    this.Then(/^Filter button has (\d+) filter$/, function(p_FilterCount, callback){
        // Get the text of the Filter button and extract count
         var filterbuttontext = filterpage.Locators.refinefilter_button.get().getText();
         console.log("Filter button text is %s", filterbuttontext);
         
         var count = parseInt(filterbuttontext.split(" ")[1].replace(/\D/g, ''));

         expect(count).to.equal(parseInt(p_FilterCount));
         callback();
    });

    
        // The product list is displayed again
    this.Then(/^Filter returns a product list$/, function (callback) {
        browser.waitForExist(filterpage.Locators.cssfilteredlist.get(), 5000);
        expect(filterpage.Locators.csstotalvalue.get()).to.be.visible();
        expect(filterpage.Locators.filteredlistheader_element.get().getText()).to.equalIgnoreCase(this.filteredProduct);
        
        callback();
    });


    // Clear all filters
    this.Given(/^I clear all filters$/, function (callback) {
          
          callback();
        });

    this.Then(/^Filter button has no filters$/, function (callback) {
        // Get the text of the Filter button and extract count
         var filterbuttontext = filterpage.Locators.refinefilter_button.get().getText();
         expect(filterbuttontext).to.be.empty();
         callback();
        });
}