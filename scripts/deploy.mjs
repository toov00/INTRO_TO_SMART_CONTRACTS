import { createWalletClient, createPublicClient, http } from 'viem';
import { hardhat } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import fs from 'fs';
import path from 'path';

const artifactPath = path.resolve('./artifacts/contracts/HelloWorld.sol/HelloWorld.json');
const contractJson = JSON.parse(fs.readFileSync(artifactPath, 'utf-8'));

const PRIVATE_KEY = '0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e';

async function main() {
  // Wallet client: for sending transactions
  const walletClient = createWalletClient({
    chain: hardhat,
    transport: http('http://127.0.0.1:8545'),
    account: privateKeyToAccount(PRIVATE_KEY),
  });

  // Public client: for reading blockchain state and waiting for receipts
  const publicClient = createPublicClient({
    chain: hardhat,
    transport: http('http://127.0.0.1:8545'),
  });

  console.log('Deploying contract...');

  // Send deploy transaction
  const txHash = await walletClient.deployContract({
    abi: contractJson.abi,
    bytecode: contractJson.bytecode,
  });

  console.log('Transaction hash:', txHash);

  // Wait for transaction to be mined using the public client
  const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });
  console.log('Contract deployed to:', receipt.contractAddress);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
