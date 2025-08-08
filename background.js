chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url && changeInfo.url === 'https://www.facebook.com/') {
    chrome.tabs.update(tabId, {
      url: 'https://www.facebook.com/?filter=friends&sk=h_chr'
    });
  }
});