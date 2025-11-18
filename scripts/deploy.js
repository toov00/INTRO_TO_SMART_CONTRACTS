async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();

    await hello.deployed();
    console.log("HelloWorld deployed to:", hello.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
