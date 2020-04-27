let webPlayerDiv = document.getElementById('dv-web-player');
webPlayerDiv.style.display = 'flex';
webPlayerDiv.firstElementChild.style.width = '80%';
let chatContainer = document.createElement('div');
chatContainer.style.width = '20%';
chatContainer.style.height = '100%';
chatContainer.style.background = 'rgb(153, 204, 255)';
const chatHTML = `
   <style>
      #input-container { width: 100%; }
      #message-input { width: 80%; }
      #send-button { width: 15%; background: #ffffff; }
   </style>
   <ul id="messages"></ul>
   <div id="input-container">
      <input id="message-input" autocomplete="off"/>
      <button id="send-button">Send</button>
   </div>
`;
chatContainer.innerHTML = chatHTML;
webPlayerDiv.appendChild(chatContainer);


