'use strict';

// tabの情報を取得する
// chrome.tabs.query({}, function(tabs) {
chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
  let i;
  let results = document.getElementById('results');
  let titles = [];

  for (i=0; i < tabs.length; i++) {
    titles.push(tabs[i].title);
  }
  results.value = titles.join("\n");
  results.select();
});


