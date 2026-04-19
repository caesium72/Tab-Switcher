document.getElementById('openShortcuts').addEventListener('click', () => {
  // Open the Chrome shortcuts configuration page
  chrome.tabs.create({
    url: 'chrome://extensions/shortcuts'
  });
});
