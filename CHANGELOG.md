# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-12-07

### Added
- Chrome extension release
- Chrome manifest v3 support
- 128x128px icon for Chrome Web Store
- Screenshot for Chrome Web Store listing
- Privacy policy documentation

### Changed
- Reorganized project structure with separate chrome/ and firefox/ folders
- Centralized icon files in icons/ folder with symlinks
- Updated README with comprehensive documentation

## [1.0.0] - 2025-12-07

### Added
- Initial Firefox extension release
- Classic blue Bitbucket favicon restoration
- Automatic favicon monitoring and persistence
- Content script for bitbucket.org pages
- Support for all Bitbucket.org pages
- Privacy-focused implementation with no data collection
- Open source release under MIT License

### Features
- Restores classic blue Bitbucket icon
- Works on all bitbucket.org pages
- Handles dynamic favicon changes
- Monitors DOM for favicon updates
- Supports page navigation and browser history events
