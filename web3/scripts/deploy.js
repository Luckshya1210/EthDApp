const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("WavePortal address: ", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
// 0x9BdF6CE72c36829b338c2A2EEDc21878AD7f20AB
// 0x6dda7B4467543Bfd670dA58E85a88d8E1c2066b1
//0xbA4E8b48F29EfAC22D2b48E7E3Bc25c81c930e1A
runMain();