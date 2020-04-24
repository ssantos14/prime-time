// grab the button from popup.html 
let changeColor = document.getElementById('changeColor');
// request the color value from storage and set it as the background of the button
chrome.storage.sync.get('color', function(data) {
   changeColor.style.backgroundColor = data.color;
   changeColor.setAttribute('value', data.color);
});
// adds an onclick event the button, which triggers a programatically injected content script
// this script turns the background color of the page the same color as the button
// note: the tabs API must be registered under the "permissions" field in the manifest
changeColor.onclick = function(element) {
   let color = element.target.value;
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
         tabs[0].id,
         {code: 'document.body.style.backgroundColor = "' + color + '";'}
      );
   });
};