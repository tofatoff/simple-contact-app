const { question, saveContact } = require("./contacts");

const main = async() => {
    const nama = await question("Nama");
    const noHP = await question("No HP");
    const email = await question("Email");

    saveContact(nama, noHP, email);
};

main();