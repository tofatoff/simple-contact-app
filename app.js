const { saveContact, listContact, detailContact, deleteContact } = require("./contacts");
const yargs = require("yargs");

yargs
    .command({
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
    })
    .demandCommand();

yargs
    .command({
        command: "list",
        describe: "Show contacts list",
        handler() {
            listContact();
        },
    })
    .demandCommand();

yargs
    .command({
        command: "detail",
        describe: "Show contact details by name",
        handler(argv) {
            detailContact(argv.nama);
        },
    })
    .demandCommand();

yargs
    .command({
        command: "delete",
        describe: "Delete a contact by name",
        builder: {
            nama: {
                describe: "Full name",
                demandOption: true,
                type: "string",
            },
        },
        handler(argv) {
            deleteContact(argv.nama);
        },
    })
    .demandCommand();

yargs.parse();

// const main = async() => {
//     const nama = await question("Nama");
//     const noHP = await question("No HP");
//     const email = await question("Email");

//     saveContact(nama, noHP, email);
// };

// main();