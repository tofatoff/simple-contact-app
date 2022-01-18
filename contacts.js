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

const loadContacts = () => {
    const fileBuffer = fs.readFileSync(filePath, "utf-8");
    const contacts = JSON.parse(fileBuffer);
    return contacts;
};

const saveContact = (nama, noHP, email) => {
    const contact = { nama, noHP, email };

    const contacts = loadContacts();

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

const listContact = () => {
    const contacts = loadContacts();
    console.log("List of contacts:");
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    });
};

const detailContact = (nama) => {
    const contacts = loadContacts();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    if (!contact) {
        console.log(`Contact with name ${nama} isn't found`);
        return false;
    }

    const keys = Object.keys(contact);
    for (let i = 0; i < keys.length; i++) {
        console.log(contact[keys[i]]);
    }
};

const deleteContact = (nama) => {
    const contacts = loadContacts();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    if (!contact) {
        console.log(`Contact with name ${nama} isn't found`);
        return false;
    }

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].nama === nama) {
            contacts.splice(i, 1);
        }
    }

    //console.log(contacts);
    fs.writeFileSync(filePath, JSON.stringify(contacts));
    console.log("Contact has been deleted");
};

module.exports = { saveContact, listContact, detailContact, deleteContact };