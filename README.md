# Query Blockchain Balance

> _This project was:_
>
> - _Created by following a Moralis Web3 tutorial [found here](https://docs.moralis.io/docs/nextjs-dapp)._

---

## Table of Contents

<!-- To use: `npm install -g doctoc && doctoc README.md` -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup project](#setup-project)
- [Available Scripts](#available-scripts)
  - [`npm run dev`](#npm-run-dev)
  - [`npm run lint`](#npm-run-lint)
  - [`npm start`](#npm-start)
  - [`npm run build`](#npm-run-build)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Setup project

1. Clone and install dependencies:

   ```sh
   npm i
   ```

1. Setup ENV variables:

   - Copy `/.env-sample` as `/.env` file, and enter your info for each ENV
     variable:

     - `MORALIS_APIKEY`:

       Can be found by logging into your Moralis account and going to the
       [Web3 APIs](https://admin.moralis.io/web3apis) page.

     - `WALLET_ADDRESS`:

       Copy the test wallet address you want to check the balance for.

       - **TODO:** replace this static address with a MetaMask/WalletConnect
         authorization. (topher)

1. Start the project in development mode:

   ```sh
   npm run dev
   ```

1. Test your project:

   - Go to `http://localhost:3000`
   - Test the following pages:
     - Native Balance: `http://localhost:3000/native`
     - API Balances: `http://localhost:3000/api/balances`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the application in development mode _(hot-code reloading, error_
_reporting, etc)._

- Open [`http://localhost:3000`](http://localhost:3000) in your browser.

See `next dev --help` for more info.

### `npm run lint`

Run ESLint on every file in specified directories.\
_If not configured, ESLint will be set up for the first time._

See `next lint --help` for more info.

### `npm start`

Starts the application in production mode.\
The application should be compiled with `npm run build` _(which runs_
_`next build`)_ first.

See `next start --help` for more info.

### `npm run build`

Compiles the application for production deployment.

See `next build --help` for more info.
