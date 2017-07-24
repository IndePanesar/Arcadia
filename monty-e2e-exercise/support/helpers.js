module.exports = {

    /**
     * @param {string} url to load
     * @returns {Promise}
     */
    loadPage: function(p_Url)
    {
        // load the url and wait for it to complete      
        browser.url('/');//p_Url);
    },

    /***
     * returns the value of an attribute on an element   
     * @param {string} css selector used to find the element
     * @param {string} attribute name to retrieve
     * @returns {string} the value of the attribute or empty string if not found
     * @example
     *      helpers.getAttributeValue('body', 'class');
     */
    getAttributeValue: function (selector, attributeName)
    {
        // get the element from the page
        return wdio.getAttribute(selector,attributeName).then(function(attributeValue) {
            return attributeValue;
        });
    },

    /***
     * returns the value of an attribute on an element   
     * @param {webelement} the webelement to scroll to
     */
    scrollToElement: function(p_WebElement)
    {
        browser.element(p_WebElement).scroll();    
    }
}