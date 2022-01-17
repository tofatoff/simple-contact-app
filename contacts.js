const fs = require("fs");

const readline = require("readline");

const dirPath = "./data";
const filePath = "./data/contacts.json";

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (q) => {
    return new Promise((resolve, reject) => {
        rl.question(q, (nama) => {
            resolve(nama);
        });
    });
};

const saveContact = (nama, noHP, email) => {
    const contact = { nama, noHP, email };
    const fileBuffer = fs.readFileSync(filePath, "utf-8");
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);
    fs.writeFileSync(filePath, JSON.stringify(contacts));
    console.log("data has been inputed");
    rl.close();
};

module.exports = { question, saveContact };