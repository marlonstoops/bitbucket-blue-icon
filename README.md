# Bitbucket Blue Icon

A lightweight browser extension that restores and maintains the classic blue Bitbucket favicon.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

Bitbucket Blue Icon is a simple browser extension that replaces Bitbucket's current favicon with the beloved classic blue icon. The extension actively monitors the page to ensure the blue icon persists, even if Bitbucket tries to change it dynamically.

## Features

- ✨ Restores the classic blue Bitbucket favicon
- 🔄 Automatically maintains the blue icon across all Bitbucket pages
- 🚀 Lightweight and fast - no performance impact
- 🔒 Privacy-focused - no data collection or tracking
- 🌐 Works on all bitbucket.org pages
- 📱 Available for Chrome and Firefox

## Installation

### Firefox

**Option 1: Firefox Add-ons (Recommended)**
- https://addons.mozilla.org/addon/bitbucket-blue-icon/

**Option 2: Temporary Installation (Development)**
1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file from the `firefox/` folder
5. Navigate to https://bitbucket.org to see the blue icon!

**Note:** Temporary add-ons in Firefox are removed when the browser restarts.

### Chrome

**Option 1: Chrome Web Store (Recommended)**
- Coming soon! Extension is currently under review.

**Option 2: Manual Installation (Development)**
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked"
5. Select the `chrome/` folder from this repository
6. Navigate to https://bitbucket.org to see the blue icon!

## How It Works

The extension uses a content script that:
1. Runs at document start on all `bitbucket.org` pages
2. Removes any existing favicon link elements
3. Injects a new favicon link pointing to the classic blue Bitbucket icon
4. Monitors the DOM for changes and reapplies the blue icon if needed
5. Handles page navigation and browser history events

All processing happens locally in your browser - no external requests are made.

## Privacy

This extension respects your privacy:
- ✅ No data collection
- ✅ No analytics or tracking
- ✅ No external network requests
- ✅ No cookies or storage
- ✅ Open source and auditable

Read our full [Privacy Policy](PRIVACY.md).

## Development

### Project Structure

```
bitbucket-blue-icon/
├── chrome/                 # Chrome extension
│   ├── manifest.json       # Chrome manifest (v3)
│   ├── content.js         # Content script
│   └── [icons]            # Symlinks to shared icons
├── firefox/               # Firefox extension
│   ├── manifest.json      # Firefox manifest (v2)
│   ├── content.js         # Content script
│   └── [icons]            # Symlinks to shared icons
├── icons/                 # Shared icon files
│   ├── icon-48.png
│   ├── icon-96.png
│   ├── icon-128.png
│   └── old-bitbucket-icon.ico
├── PRIVACY.md             # Privacy policy
└── README.md
```

### Building

To create distribution packages:

```bash
# Chrome
cd chrome && zip -r ../bitbucket-blue-icon-chrome.zip . -x "screenshot*"

# Firefox
cd firefox && zip -r ../bitbucket-blue-icon-firefox.zip .
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Classic blue Bitbucket icon belongs to Atlassian

## Support

If you encounter any issues or have questions:
- Open an issue on [GitHub](https://github.com/marlonstoops/bitbucket-blue-icon/issues)

---

**Note:** This extension is not affiliated with or endorsed by Atlassian or Bitbucket.