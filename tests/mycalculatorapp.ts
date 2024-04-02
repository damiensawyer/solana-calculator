import * as anchor from '@coral-xyz/anchor'

// const anchor2 = require("@coral-xyz/anchor");
// const assert = require("assert");
const { SystemProgram } = anchor.web3;

describe("mycalculatorapp", () => {
  const provider = anchor.AnchorProvider.local();
  
  anchor.setProvider(provider);
  const calculator = anchor.web3.Keypair.generate();
  const program = anchor.workspace.Mycalculatorapp;

  it("Creates a calculator", async () => {
    await program.rpc.create("hello Solana", {
      accounts: {
        calculator: calculator.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
    });
  });
});

// describe("mycalculatorapp", () => {
//   // Configure the client to use the local cluster.
//   anchor.setProvider(anchor.AnchorProvider.env());

//   const program = anchor.workspace.Mycalculatorapp as Program<Mycalculatorapp>;

//   it("Is initialized!", async () => {
//     // // Add your test here.
//     // const tx = await program.methods.initialize().rpc();
//     // console.log("Your transaction signature", tx);
//     assert(false)
//   });
// });
