// export const gotoPage = () => {
//     browser.url('https://m.topshop.com')
// }

// export const hasLogo = () => {
//     browser.isVisible(".BrandLogo-img")
// }
// homepage.js
module.exports =
{
	"url": 'https://m.topshop.com',

    // Define the page elements here for the Home page as getters	
    "hp_logo": {"get": () => { return browser.element('img.BrandLogo-img');}},
    "categories_menu_btn": {"get": () => { return browser.element('button.BurgerButton');}},
    "search_button": {"get": () => {return browser.element('button.Header-searchButton');}},
    "searchtextbox": {"get": () => {return browser.element('input.searchTermInput');}},
    "searchbar_button": {"get": () => {return browser.element('button.SearchBar-button');}},
    
    // Define the string locators here for the Home page as getters
    "cssLogo": {"get": () => {return 'img.BrandLogo-img';}},
    "csssearchtext": {"get": () => {return 'input#searchTermInput';}},
    "csssearchbarbutton": {"get": () => {return 'button.SearchBar-button';}}
};