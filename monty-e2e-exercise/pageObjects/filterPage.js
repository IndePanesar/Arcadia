'use strict';
    // Define the elements for the Filter Page
var Locators = {    
    refinefilter_button: {get: () => {return browser.element('button.Filters-refineButton');}},
    applyrefinements_button: {"get": () => {return browser.element('button.Refinements-applyButton');}},
    filteredlist_element: {get: () => {return browser.element('div.ProductList');}},
    filteredlistheader_element: {get: () => {return browser.element('span.PlpHeader-title');}},
    clearall_button:{get: () => {return browser.element('Refinements-clearButton');}},

    //Define the string locator getters for the Filter page
    cssfilteredlist: {get: () => {return 'div.ProductList';}},
    cssheadertitle: {get: () => {return 'span.PlpHeader-title';}},
    csstotalvalue: {get: () => {return 'span.PlpHeader-totalValue';}},
    csstotallabel: {get: () => {return 'span.PlpHeader-totalLabel';}},
    xpathrefinestitle: {get: () => {return './/h3[contains(text(),\'Filter\')]';}},
    xpathrefinefilter: {get: () => {return './/div[contains(@class,\'productList\')]//span[text() = \'{0}\']';}},
    xpathrefinefilteroptions: {get: () => {return './/div[contains(@class,\'productList\')]//span[text() = \'{0}\']/../../../following-sibling::div//button';}},
    xpathrefinefilteroptionvalue: {get: () => {return './/div[contains(@class,\'productList\')]//span[text() = \'{0}\']/../../../following-sibling::div//button//span[contains(text(),\'{1}\')]';}},
    xpathrefinefilteroptioncount: {get: () => {return './/div[contains(@class,\'productList\')]//span[text() = \'{0}\']/../../../following-sibling::div//button//span[contains(text(),\'{1}\')]/following-sibling::span';}}
};
var Actions = {
    // Get modified locators
    xpathlocatorforfilter : { get: (p_Filter) => { return Locators.xpathrefinefilter.get().replace("{0}", p_Filter);}},
    xpathlocatorforfilteroptions : {get: (p_Filter) => { return Locators.xpathrefinefilteroptions.get().replace("{0}", p_Filter);}},
                                                                         
    xpathlocatorforfilteroptionvalue : {get: (p_Filter, p_FilterOption) => { return Locators.xpathrefinefilteroptionvalue.get().replace("{0}", p_Filter).replace("{1}", p_FilterOption.toLowerCase());}},
    xpathlocatorforfilteroptiontotal : {get: (p_Filter, p_FilterOption) => { return Locators.xpathrefinefilteroptioncount.get().replace("{0}", p_Filter).replace("{1}", p_FilterOption.toLowerCase());}},

    // Get misc properties 
    filterOptionCount: {get: (p_Filter, p_Option) => {return browser.element(Actions.xpathlocatorforfilteroptiontotal.get(p_Filter, p_Option)).getText();}},
    // Gets text of element
    filterButtonCaption:{get: () => { return browser.getText(Locators.xpathrefinestitle.get());}},
    refineFilterButtonCaption : {get: () => { return Locators.refinefilter_button.get().getText();}},

    // Button clicks etc
    refineFilterButton: {click: () => {Locators.refinefilter_button.get().click();}},
    applyRefinements:{click: () => { Locators.applyrefinements_button.get().click();}},
    clearAllFilters:{click: () => { Locators.clearall_button.get().click();}}
};

module.exports =
{
    Locators,
    Actions
};