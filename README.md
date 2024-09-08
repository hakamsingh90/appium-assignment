# Appium Assigment

**NOTE:** This appium assigemnt is for Webdriver V9 where the tests are written with `async`/`await` and TypeScript.

> [!NOTE]
> This appium assignment only handles local execution on 1 emulator at a time, not parallel execution.

# Based on

This appium assignment is currently based on:

- **WebdriverIO:** `9.x`
- **Appium:** `2.x`

## Installation

1. Clone this project by running

```sh
git clone https://github.com/hakamsingh90/appium-assignment.git
```

2. Install all dependencies

```sh
npm install
```
3. Create a `./apps` directory at the root of this project. Download the app files (`.apk`) and copy.

4. Adjust the configuration file(s) for [Android](./wdio.conf.ts) regarding the device configuration you've created on your local machine.

Running tests locally
    - **Android App:** `npm run android.app.cucumbersauce`


