// grab the create room button from popup.html 
let createRoomButton = document.getElementById('create-room');
// add onclick listener to the create room button
createRoomButton.onclick = function(element) {
   // get the current tab
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // programmatically inject content script into tab
      chrome.tabs.executeScript(
         tabs[0].id,
         {file: 'contentScript.js'},
         function() {
            // check if injection was successful
            if(chrome.runtime.lastError) {
               // if not, throw error
               console.error(chrome.runtime.lastError);
               throw Error("Unable to inject script into tab ");
            }
            // if yes, sendMessage to the content script
            chrome.tabs.sendMessage(
               tabs[0].id, 
               {type: "create-room"}, 
               function(response) {
                  console.log(response.confirmation);
               }
            )
         }
      );
   });
};
