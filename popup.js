document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    const targetUrl = button.getAttribute('data-url');
    chrome.tabs.create({ url: targetUrl });
  });
});
