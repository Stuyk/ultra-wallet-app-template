# Ultra Wallet App Demo

This utilizes the [Ultra Wallet Extension](https://chrome.google.com/webstore/detail/ultra-wallet/kjjebdkfeagdoogagbhepmbimaphnfln) with Vite + Vue.

It auto includes a global `ultra` variable with `TypeScript Interfaces` for easy auto-completion.

Also includes an `http(s)` setup for easily working with the extension in a local environment.

## Before Installation

- Install NodeJS 16+

## Installation

```
npm i
```

## Usage

### Development Mode

Open `https://localhost:3000` in your browser with the chrome extension installed.

```
npm run dev
```

### Production

Deploy the files from the `dist` folder to a Web Server.

```
npm run build
```

## Warning

All versions in `package.json` are pinned to specific versions for ensuring the template works in the future.

Ensure you upgrade these packages as time moves forward.