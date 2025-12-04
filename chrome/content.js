(function() {
  'use strict';

  const BLUE_ICON_URL = chrome.runtime.getURL('old-bitbucket-icon.ico');
  let isInitialized = false;

  function replaceFavicon() {
    // Check if our icon already exists
    const ourIcon = document.querySelector('link[href="' + BLUE_ICON_URL + '"]');
    if (ourIcon) {
      // Remove any other favicon links that aren't ours
      const otherLinks = document.querySelectorAll('link[rel*="icon"]:not([href="' + BLUE_ICON_URL + '"])');
      otherLinks.forEach(link => link.remove());
      return;
    }

    // Remove all existing favicon links
    const existingLinks = document.querySelectorAll('link[rel*="icon"]');
    existingLinks.forEach(link => link.remove());

    // Add our blue icon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/x-icon';
    favicon.href = BLUE_ICON_URL;
    document.head.appendChild(favicon);
  }

  // Wait for the page to fully load before starting
  window.addEventListener('load', function() {
    // Give Bitbucket a moment to set their icon
    setTimeout(function() {
      replaceFavicon();
      isInitialized = true;
      
      // Now start monitoring
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeName === 'LINK' && node.rel && node.rel.includes('icon')) {
              replaceFavicon();
              return;
            }
          }
        }
      });

      observer.observe(document.head, {
        childList: true,
        subtree: false
      });
    }, 500);
  });

  // Also handle pageshow event for browser back/forward
  window.addEventListener('pageshow', function() {
    if (isInitialized) {
      setTimeout(replaceFavicon, 500);
    }
  });
})();
