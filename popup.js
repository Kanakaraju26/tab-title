document.getElementById('getTitleButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentTab = tabs[0]; 
      var title = currentTab.title; 
      document.getElementById('title').textContent = "Tab Title: " + title; 
    });
  });
  