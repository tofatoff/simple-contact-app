const fs = require("fs");
const validator = require("validator");

const dirPath = "./data";
const filePath = "./data/contacts.json";

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
}

const saveContact = (nama, noHP, email) => {
    const contact = { nama, noHP, email };
    const fileBuffer = fs.readFileSync(filePath, "utf-8");
    const contacts = JSON.parse(fileBuffer);

    if (email) {
        if (!validator.isEmail(email)) {
            console.log("Email is invalid");
            return false;
        }
    }

    if (!validator.isMobilePhone(noHP, "id-ID")) {
        console.log("Phone is invallid");
        return false;
    }
    contacts.push(contact);
    fs.writeFileSync(filePath, JSON.stringify(contacts));
    console.log("data has been inputed");
};

module.exports = { saveContact };