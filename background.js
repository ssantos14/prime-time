// add event listener for runtime.onInstalled
chrome.runtime.onInstalled.addListener(function() {
  // it is up to the extension to tell the browser when the user can interact with popup.html.
  // add declared rules to the background script with the declarativeContent API 
  // note: the declarativeContent API must be registered under the "permissions" field in the manifest
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
     // show the page action (popup.html) when the URL matches 'developer.chrome.com'
     chrome.declarativeContent.onPageChanged.addRules([{
       conditions: [
         new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'www.amazon.com', schemes: ['http', 'https'] },
          css: ["#dv-web-player.dv-player-fullscreen"]
         })
       ], 
       actions: [new chrome.declarativeContent.ShowPageAction()]
     }]);
   });
});