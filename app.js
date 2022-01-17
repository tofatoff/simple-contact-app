const { question, saveContact } = require("./contacts");
const yargs = require("yargs");

yargs.command({
    command: "add",
    describe: "Add new contact",
    builder: {
        nama: {
            describe: "Full name",
            demandOption: true,
            type: "string",
        },
        noHP: {
            describe: "Phone number",
            demandOption: true,
            type: "string",
        },
        email: {
            describe: "Email address",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        saveContact(argv.nama, argv.noHP, argv.email);
    },
});

yargs.parse();

// const main = async() => {
//     const nama = await question("Nama");
//     const noHP = await question("No HP");
//     const email = await question("Email");

//     saveContact(nama, noHP, email);
// };

// main();