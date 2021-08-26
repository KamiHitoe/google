(function() {
  'use strict';
  
  let links = document.getElementsByTagName('a');
  // alert(links.length);
  chrome.runtime.sendMessage({count: links.length},
    function() {
      console.log('message sent');
    })
})();


