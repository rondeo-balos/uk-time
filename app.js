// Receive the updated time from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.time) {
      document.getElementById('time').innerHTML = message.time;
    }
  });
  