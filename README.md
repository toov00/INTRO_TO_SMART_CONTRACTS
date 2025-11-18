
# INTRO TO SMART CONTRACTS

A simple HardHat setup, used to deploy smart contracts on a local testnet!

## Getting Started

### Prerequisites

* Install modules
  ```sh
  brew install nvm
  ```
  
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/toov00/INTRO_TO_SMART_CONTRACTS.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create your smart contract(s) in `contracts/`

4. Create your deployment script(s) in `scripts/`

## Usage

1. In one shell window, start an instance of the Hardhat Network
   ```sh
   npx hardhat node
   ```

2. Enter the PRIVATE KEY of any existing account in `scripts/deploy.mjs`
   ```js
   const PRIVATE_KEY = 'ENTER PRIVATE KEY';
   ```

3. In another shell window, deploy the contract
    ```sh
    npx hardhat run scripts/deploy.mjs --network localhost
    ```
