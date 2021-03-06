"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * Get the title of current opened website. This command only works for browser environments or on mobile
 * devices with webview enabled (hybrid tests).
 *
 * <example>
    :getTitle.js
    it('should get the title of the document', function () {
        browser.url('http://webdriver.io');

        var title = browser.getTitle()
        console.log(title);
        // outputs the following:
        // "WebdriverIO - WebDriver bindings for Node.js"
    });
 * </example>
 *
 * @alias browser.getTitle
 * @return {String} current page title
 * @uses protocol/title
 * @type property
 *
 */

var getTitle = function getTitle() {
    return this.unify(this.title(), {
        extractValue: true
    });
};

exports.default = getTitle;
module.exports = exports["default"];