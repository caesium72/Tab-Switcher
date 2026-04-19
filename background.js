chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    if (tabs.length <= 1) return;

    chrome.tabs.query({ active: true, currentWindow: true }, (activeTabs) => {
      const activeTab = activeTabs[0];
      const currentIndex = activeTab.index;
      let nextIndex;

      if (command === "next-tab") {
        nextIndex = (currentIndex + 1) % tabs.length;
      } else if (command === "prev-tab") {
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      }

      const nextTab = tabs.find(tab => tab.index === nextIndex);
      if (nextTab) {
        chrome.tabs.update(nextTab.id, { active: true });
      }
    });
  });
});
