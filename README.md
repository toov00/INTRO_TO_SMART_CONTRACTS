# Intro to Smart Contracts

A beginner-friendly Hardhat setup for writing, compiling, and deploying smart contracts on a local Ethereum testnet.

## Features

* Pre-configured Hardhat development environment
* Local blockchain for fast, free testing
* Example contract and deployment script templates
* No real ETH required — perfect for learning

## Getting Started

### Prerequisites

* Node.js (v20+)
```sh
  brew install nvm
  nvm install 20
  nvm use 20
```
* Basic understanding of Solidity (helpful but not required)

### Installation

1. Clone the repo
```sh
   git clone https://github.com/toov00/INTRO_TO_SMART_CONTRACTS.git
   cd INTRO_TO_SMART_CONTRACTS
```
2. Install dependencies
```sh
   npm install
```

## Usage

### 1. Write Your Contract

Create a new Solidity file in `contracts/`:
```solidity
// contracts/MyContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string public message = "Hello, Web3!";
}
```

### 2. Create a Deployment Script

Create a script in `scripts/`:
```js
// scripts/deploy.mjs
const PRIVATE_KEY = 'your-private-key-here';

// ... deployment logic
```

### 3. Start Local Blockchain

In one terminal window:
```sh
npx hardhat node
```

This starts a local Ethereum network with 20 pre-funded test accounts. Copy any private key from the output.

### 4. Deploy Your Contract

In another terminal window:
```sh
npx hardhat run scripts/deploy.mjs --network localhost
```

You should see your contract address in the output!

## Project Structure
```
INTRO_TO_SMART_CONTRACTS/
├── contracts/        # Your Solidity contracts
├── scripts/          # Deployment scripts
├── test/             # Contract tests
├── hardhat.config.js # Hardhat configuration
└── package.json
```

## Useful Commands

| Command | Description |
|---------|-------------|
| `npx hardhat node` | Start local blockchain |
| `npx hardhat compile` | Compile contracts |
| `npx hardhat test` | Run tests |
| `npx hardhat run scripts/deploy.mjs --network localhost` | Deploy to local network |
| `npx hardhat clean` | Clear cache and artifacts |

## Next Steps

Once comfortable with local deployment, try:

* Writing unit tests with Hardhat + Chai
* Deploying to testnets (Sepolia, Goerli)
* Verifying contracts on Etherscan
* Adding frontend integration with ethers.js

## Roadmap

- [x] Basic Hardhat setup
- [x] Local deployment workflow
- [ ] Example ERC-20 token contract
- [ ] Example ERC-721 NFT contract
- [ ] Testnet deployment guide (Sepolia)
- [ ] Contract verification script
- [ ] Unit testing examples

## Resources

* [Hardhat Documentation](https://hardhat.org/docs)
* [Solidity Documentation](https://docs.soliditylang.org)
* [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)

## License

Distributed under the MIT License. 
