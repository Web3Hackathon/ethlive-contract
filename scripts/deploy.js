async function main() {
  // We get the contract to deploy
  const Seeter = await ethers.getContractFactory("SubscriptionEthLive");
  const seeter = await Seeter.deploy();

  await seeter.deployed();

  console.log("Ethlive Contract deployed to:", seeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
